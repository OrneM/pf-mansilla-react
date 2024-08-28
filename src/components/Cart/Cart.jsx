import { useCartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../firebase/dbConnection";
import Swal from 'sweetalert2';
import {Loader} from  "../Loader/Loader"; 


const Cart = () => {
  const { qtyItems, cart, total, removeItem, clearCart } = useCartContext();
  const [showForm, setShowForm] = useState(false); 
  const [formData, setFormData] = useState({name:"", tel:"", email:""});
  const [loading, setLoading] = useState(false);  // Estado para el loader
  const navigate = useNavigate();

  const handleRemoveItem = (id, price, qty) => {
    removeItem(id, price, qty);
  }

  const handleClearCart = () => {
    clearCart();
  }

  const handleGotoform = () => {
    setShowForm(true); 
  };

  const handleOnChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSaveCart = () => {
    setLoading(true);  // Mostrar el loader
    const ordersCollection = collection(db, "orders");
    const newOrder = {
      buyer: formData,
      items: cart,
      date: new Date(),
      total: total
    };

    addDoc(ordersCollection, newOrder)
      .then((doc) => {
        setLoading(false);  // Ocultar el loader
        Swal.fire({
          title: '¡Compraste en La michitienda!',
          text: `Tu número de orden es: ${doc.id}. ¡Gracias por tu compra!`,
          icon: 'success',
          confirmButtonText: "Aceptar",
        }).then(() => {
          clearCart();
          setFormData({ name: "", tel: "", email: "" });
          navigate("/");
        });

        console.log("Order saved with id: " + doc.id);
      })
      .catch((error) => {
        setLoading(false);  // Ocultar el loader
        console.error("Error adding document: ", error);
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al guardar la orden. Intenta nuevamente.',
          icon: 'error',
          confirmButtonText: 'Cerrar'
        });
      });
  };

  if (qtyItems === 0){
    return (
      <div className="carrito-vacio">
        <h1> ¡Ups... tu carrito está vacio!</h1>
        <Link to= "/" className="btn btn-primary"> Productos </Link>
      </div>
    )
  }

  return (
    <div className="table-container">
      {loading && <Loader />} {/* Mostrar el loader si está en estado "loading" */}
      <table className="table-primary">
        <thead>
          <tr className="table-primary">
            <th>#</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>*</th>
          </tr>
        </thead>
        <tbody>
          {cart?.map(({ id, name, price, qty }, index) => {
            return (
              <tr className="table-primary" key={index}>
                <td className="table-primary">{id}</td>
                <td className="table-primary">{name}</td>
                <td className="table-primary">${price}</td>
                <td className="table-primary">{qty}</td>
                <td className="table-primary">
                  <button className="btn btn-secondary" onClick={() => handleRemoveItem(id, price, qty)}>
                    x
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td className="table-primary" colSpan={4}>Precio total</td>
            <td> $ {total} </td>
          </tr>
        </tbody>
      </table>
      <button className="limpiar-carrito" onClick={handleClearCart}>Limpiar Carrito</button>
      {!showForm && (
        <button className="btn-continuar-compra" onClick={handleGotoform}>
          Continuar compra
        </button>
      )}
      
      {showForm && (
        <div className="form-container">
          <section className="style-form">
            <label htmlFor="name">Nombre:</label>
            <input type="text" name="name" id="name" placeholder="Ingrese su nombre" onChange={handleOnChange} />

            <label htmlFor="phone">Teléfono:</label>
            <input type="number" name="tel" id="tel" placeholder="Ingrese su telefono" onChange={handleOnChange} />

            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" placeholder="Ingrese su email" onChange={handleOnChange} />

            <button className="submit-btn" onClick={handleSaveCart}>Finalizar Compra</button>
          </section>
        </div>
      )}
    </div>
  );
}

export default Cart;

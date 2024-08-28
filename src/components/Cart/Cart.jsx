import { useCartContext } from "../../context/CartContext"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../firebase/dbConnection";



const Cart = () => {

    const { qtyItems, cart, total, removeItem, clearCart } = useCartContext();
    const [showForm, setShowForm] = useState(); 
    const [formData, setFormData] = useState({name:"", tel:"", email:""});
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
      setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSaveCart = () => {
      console.log("Saving in database")
      console.log("formData", formData)
      console.log("cart", cart)
  
      const ordersCollection = collection(db, "orders")
      const newOrder = {
        buyer: formData,
        items: cart,
        date: new Date(),
        total: total
      }
  
      addDoc(ordersCollection, newOrder)
        .then((doc)=>{
          alert("Order saved with id: " + doc.id)
          console.log("Order saved with id: " + doc.id)
          clearCart();
          setFormData({name:"", tel:"", email:""});
          navigate("/");
         
        })
        .catch((error)=>{
          console.error("Error adding document: ", error)})
    }

    

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
                  <button className= "btn btn-secondary" variant="secondary" onClick={() => handleRemoveItem(id, price, qty)}>
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
      <button className= "limpiar-carrito"onClick={handleClearCart}>Limpiar Carrito</button>
     {!showForm && (<button className="btn-continuar-compra" onClick={handleGotoform}>Continuar compra</button>)}
      
      {showForm && ( <div className="form-container">
      <section className="style-form">
        <label htmlFor="name">Nombre:</label>
        <input type="text" name="name" id="name" placeholder="Ingrese su nombre" onChange={(e)=> handleOnChange(e)}/>

        <label htmlFor="phone">Teléfono:</label>
        <input type="number" name="tel" id="tel" placeholder="Ingrese su telefono" onChange={(e)=> handleOnChange(e)}/>

        <label htmlFor="email">Email:</label>
       <input type="email" name="email" id="email" placeholder="Ingrese su email" onChange={(e)=> handleOnChange(e)}/>

       <button className="submit-btn" onClick={handleSaveCart}>Finalizar Compra</button>
      </section>
    </div>)} 

    </div>
    
    
     
    )
  }
  
  
  export default Cart
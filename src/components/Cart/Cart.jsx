import { useCartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import { db } from "../../firebase/dbConnection";
import Swal from 'sweetalert2';
import { Loader } from "../Loader/Loader";
import { BsTrash } from "react-icons/bs";


const CartItem = ({ id, name, price, qty, image, onRemoveOne, onAdd, onFullRemove }) => {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleDecrement = () => {
    if (qty > 1) {
      onRemoveOne(id, price);
    } else {
      setIsRemoving(true);
      setTimeout(() => {
        onRemoveOne(id, price);
      }, 250);
    }
  };

  const handleTrash = () => {
    setIsRemoving(true);
    setTimeout(() => {
      onFullRemove(id, price, qty);
    }, 250);
  }

  const handleIncrement = () => {
    onAdd({ id, name, price, image }, 1);
  }

  return (
    <div className={`cart-item ${isRemoving ? "cart-item-exiting" : ""}`}>
      {image && <img src={image} alt={name} className="cart-item-img" />}
      <div className="cart-item-info">
        <h3 className="cart-item-title">{name}</h3>
        <p className="cart-item-price">${price}</p>
      </div>
      <div className="cart-item-subtotal">
        ${price * qty}
      </div>
      <div className="cart-item-actions">
        <div className="cart-stepper">
          <button className="stepper-btn trash-btn" onClick={handleTrash} aria-label="Quitar producto">
            <BsTrash />
          </button>
          <div className="stepper-controls">
            <button className="stepper-btn" onClick={handleDecrement}>−</button>
            <span className="stepper-qty">{qty}</span>
            <button className="stepper-btn" onClick={handleIncrement}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  const { qtyItems, cart, total, removeOneUnit, addToCart, removeItem, clearCart } = useCartContext();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", tel: "", email: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRemoveOne = (id, price) => {
    removeOneUnit(id, price);
  }

  const handleFullRemove = (id, price, qty) => {
    removeItem(id, price, qty);
  }

  const handleAddOne = (item, qty) => {
    addToCart(item, qty);
  }

  const handleClearCart = () => {
    clearCart();
  }

  const handleGotoform = () => {
    setShowForm(true);
  };

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSaveCart = () => {
    // Validation
    if (!formData.name || !formData.tel || !formData.email) {
      Swal.fire('Ups, faltan datos', 'Por favor, revisá que todos los campos estén completos.', 'warning');
      return;
    }
    if (cart.length === 0) {
      Swal.fire('El carrito está descansando', '¡Agregá productos para despertarlo!', 'warning');
      return;
    }

    setLoading(true);
    const ordersCollection = collection(db, "orders");

    // Sanitize items
    const orderItems = cart.map(item => ({
      id: item.id,
      title: item.name,
      price: item.price,
      quantity: item.qty
    }));

    const newOrder = {
      buyer: formData,
      items: orderItems,
      date: serverTimestamp(),
      total: Number(total) // Ensure it's a number
    };

    console.log("Submitting Order:", newOrder); // Debug log

    addDoc(ordersCollection, newOrder)
      .then((doc) => {
        setLoading(false);
        Swal.fire({
          title: '¡Compra exitosa! 🐾',
          text: `Tu orden #${doc.id} ya está en proceso. ¡Gracias por confiar en nosotros!`,
          icon: 'success',
          confirmButtonText: "Entendido",
        }).then(() => {
          clearCart();
          setFormData({ name: "", tel: "", email: "" });
          navigate("/");
        });

        console.log("Order saved with id: " + doc.id);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error adding document: ", error);
        console.error("Error Code: ", error.code);
        console.error("Error Message: ", error.message);
        Swal.fire({
          title: 'Ouch!',
          text: `Ocurrió un error inesperado al procesar tu orden: ${error.message}. Por favor, intentá nuevamente.`,
          icon: 'error',
          confirmButtonText: 'Cerrar'
        });
      });
  };

  if (qtyItems === 0) {
    return (
      <div className="empty-cart-container">
        <h1 className="empty-cart-title">¡Tu carrito está vacío! 😿</h1>
        <p className="empty-cart-subtitle">Explorá nuestros productos y encontrá algo especial para vos.</p>
        <Link to="/" className="btn-kawai primary">Ver Productos</Link>
      </div>
    )
  }

  return (
    <div className="cart-container">
      {loading && <Loader />}
      <div className="cart-items-list">
        {cart?.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            onRemoveOne={handleRemoveOne}
            onFullRemove={handleFullRemove}
            onAdd={handleAddOne}
          />
        ))}
      </div>
      <div className="cart-total-section">
        <span className="total-label">Total:</span>
        <span className="total-amount">${total}</span>
      </div>
      <button className="btn-kawai secondary" onClick={handleClearCart}>Vaciar Carrito</button>
      {!showForm && (
        <button className="btn-kawai primary" onClick={handleGotoform}>
          Iniciar Compra
        </button>
      )}

      {showForm && (
        <div className="form-container">
          <section className="style-form">
            <label htmlFor="name">Nombre:</label>
            <input type="text" name="name" id="name" placeholder="Ej: Juan Perez" onChange={handleOnChange} />

            <label htmlFor="phone">Teléfono:</label>
            <input type="number" name="tel" id="tel" placeholder="Ej: 1122334455" onChange={handleOnChange} />

            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" placeholder="Ej: juan@mail.com" onChange={handleOnChange} />

            <button className="btn-kawai primary" onClick={handleSaveCart}>Confirmar Pedido</button>
          </section>
        </div>
      )}
    </div>
  );
}

export default Cart;

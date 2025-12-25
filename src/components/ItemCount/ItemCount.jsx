import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const ItemCount = ({ stock, initial, handleOnBuy }) => {
  const navigate = useNavigate();
  const [qty, setQty] = useState(initial)
  const [itemAdded, setItemAdded] = useState(false);

  const increment = () => {
    if (qty < stock) {
      setQty(qty + 1)
    }
  }


  const decrement = () => {
    if (qty > 1) {
      setQty(qty - 1)
    }
  }

  const handleAddToCart = () => {
    handleOnBuy(qty)
    setItemAdded(true)
  }

  const handleGoToCart = () => {
    setItemAdded(false)
    navigate("/cart")
  }

  const handleContinueShopping = () => {
    setItemAdded(false)
    navigate("/")
  }

  return (<>
    {itemAdded ? (
      <div className="item-count-actions">
        <button className="btn-kawai primary" onClick={handleGoToCart}>Ver carrito</button>
        <button className="btn-kawai secondary" onClick={handleContinueShopping}>Seguir mirando</button>
      </div>
    ) : (
      <div className="item-count-container">
        <div className="quantity-selector">
          <button className="qty-btn" onClick={decrement} disabled={qty <= 1}>−</button>
          <span className="qty-display">{qty}</span>
          <button className="qty-btn" onClick={increment} disabled={qty >= stock}>+</button>
        </div>
        <button className="btn-kawai primary btn-add-cart" onClick={handleAddToCart}>Agregar a mi compra</button>
      </div>
    )}
  </>
  );
};

ItemCount.propTypes = {
  stock: PropTypes.number.isRequired,
  initial: PropTypes.number.isRequired,
  handleOnBuy: PropTypes.func.isRequired,
};

export default ItemCount


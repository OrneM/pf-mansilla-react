import { useState } from "react";
import { useNavigate } from "react-router-dom";





const ItemCount = ({stock, initial, handleOnBuy}) => {
    const navigate = useNavigate();
    const [qty, setQty] = useState(initial)
    const [itemAdded, setItemAdded] = useState(false);

    const increment = () => {
        if (qty < stock) {
            setQty (qty+1)
        }
    }


    const decrement = () => {
        if (qty > 1){
            setQty (qty-1)
        }
    }

    const handleAddToCart = () =>{
        handleOnBuy(qty)
        setItemAdded(true)
      }

      const handleGoToCheckout = () =>{
        setItemAdded(false)
        navigate("/cart")
      }

    return (   <>
        {itemAdded ? (
          <button className= "btn btn-primary" variant="primary" onClick={handleGoToCheckout}>Continuar compra</button>
        ) : (
          <>
           <div className="controls">
                <button className= "btn btn-primary" variant="primary" onClick={decrement}> - </button>
                <h5>{qty}</h5>
                <button className= "btn btn-primary" variant="primary" onClick={increment}> + </button>

            </div>
            <button className= "btn btn-primary" variant="primary" onClick={handleAddToCart}>Agregar al carrito</button>
          </>
        )}
      </>
    );
  };
export default ItemCount


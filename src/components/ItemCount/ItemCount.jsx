import { useState } from "react";




const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity (quantity+1)
        }
    }


    const decrement = () => {
        if (quantity > 1){
            setQuantity (quantity-1)
        }
    }

    return (
        <div className="counter">
            <div className="controls">
                <button className= "btn btn-primary" variant="primary" onClick={decrement}> - </button>
                <h5>{quantity}</h5>
                <button className= "btn btn-primary" variant="primary" onClick={increment}> + </button>

            </div>
            <div className="btn btn-primary" variant="primary">
                <button className="btn btn-primary" variant="primary" onClick={()=> onAdd(quantity)} disabled = {!stock}>
                    Agregar al carrito </button>
            </div>
        </div>
    )
}
export default ItemCount


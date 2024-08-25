import cart from "../../assets/cart.png"
import { useCartContext } from "../../context/CartContext"

function CartWidget (){

    const { qtyItems } = useCartContext()
    return(
        <section className="cart-container">
            <div className="cart-icon-container">
                <img src= {cart} alt="carrito-icono" className="cartImg" />{ qtyItems }
             </div>

        </section>  
         
    )
}

export default CartWidget
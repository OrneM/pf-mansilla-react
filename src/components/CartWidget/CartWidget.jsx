import cart from "../../assets/cart.svg"

function CartWidget (){
    return(
        <div>
            <img src= {cart} alt="carrito-icono" className="cartImg"/>
        </div>
         
    )
}

export default CartWidget
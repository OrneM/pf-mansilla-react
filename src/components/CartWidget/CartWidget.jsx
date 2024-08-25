import cart from "../../assets/cart.png"
import { useCartContext } from "../../context/CartContext"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function CartWidget (){

    const { qtyItems } = useCartContext()

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (qtyItems > 0) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [qtyItems]);


    return (
        <section className="cart-container">
            {visible && ( 
                <div className="cart-icon-container">
                    <Link to="/cart">
                        <img src={cart} alt="carrito-icono" className="cartImg" />
                    </Link>
                    <span className="qtyItems">{qtyItems}</span>
                </div>
            )}
        </section>
    );
}

export default CartWidget;


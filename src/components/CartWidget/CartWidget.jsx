import { BsCart3 } from "react-icons/bs"
import { useCartContext } from "../../context/CartContext"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function CartWidget() {

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
        <Link to="/cart" className={`cart-widget-container ${visible ? 'visible' : ''}`}>
            <BsCart3 className="cart-icon" />
            {qtyItems > 0 && <span className="cart-badge">{qtyItems}</span>}
        </Link>
    );
}

export default CartWidget;


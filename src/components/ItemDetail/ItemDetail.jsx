import ItemCount from "../ItemCount/ItemCount"
import { useCartContext } from "../../context/CartContext";
import PropTypes from 'prop-types';


const ItemDetail = ({ id, name, image, description, price, stock }) => {

    const { addToCart } = useCartContext();

    const handleOnBuy = (qty) => {
        console.log(`Se agregaron ${qty} productos al carrito`)
        const item = { id, name, description, price, image }
        addToCart(item, qty)
    }


    return (
        <div className="item-detail-container">
            <div className="detail-image-container">
                <img src={image} className="detail-image" alt={description} />
            </div>
            <div className="detail-info">
                <h2 className="detail-title">{name}</h2>
                <h3 className="detail-price">${price}</h3>
                <p className="detail-description">{description}</p>
                <div className="detail-stock">Stock disponible: {stock}</div>
                <section className="detail-actions">
                    <ItemCount stock={stock} initial={1} handleOnBuy={handleOnBuy} />
                </section>
            </div>
        </div>
    )
}

ItemDetail.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    stock: PropTypes.number,
};

export default ItemDetail
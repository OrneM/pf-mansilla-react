import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

const Item = ({ id, name, image, price, stock, description }) => {

    return (

        <div className="card" style={{ width: '18rem' }}>
            <img src={image} className="card-img-top" alt={description} />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h3 className="product-price"> ${price}</h3>

                {stock === 0 && <span className="badge badge-sold-out">Agotado</span>}
                {stock > 0 && stock <= 5 && <span className="badge badge-low-stock">¡Últimos!</span>}

                <Link className="btn-kawai primary" to={`/item/${id}`}>
                    {stock > 0 ? "Comprar" : "Ver detalles"}
                </Link>
            </div>
        </div>
    )

}

Item.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
};

export default Item
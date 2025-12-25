import Item from "../Item/Item"
import PropTypes from 'prop-types';

const ItemList = ({ products }) => {
    return (
        <div className='product-container'>
            {products.map(prod => <Item key={prod.id}{...prod} />)}
        </div>
    )
}

ItemList.propTypes = {
    products: PropTypes.array.isRequired,
};

export default ItemList
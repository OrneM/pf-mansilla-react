import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory} from '../../mock/asyncMock'
import ItemList from "../ItemList/ItemList"
import { useParams} from 'react-router-dom';

const ItemListContainer = ({title}) => {

  const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(()=> {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then (response => {
                setProducts (response)
               
            })
            .catch (error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <div className='main-bkg'>

            <h1 className='greeting'>{title}</h1>

            <div className='product-container'>
            <ItemList products = {products} />
           </div>
        </div>
    )
}

/**/

export default ItemListContainer

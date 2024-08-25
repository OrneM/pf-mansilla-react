import { useState, useEffect } from 'react';
import { useCartContext } from '../../context/CartContext';
import { getProducts, getProductsByCategory} from '../../mock/asyncMock'
import ItemList from "../ItemList/ItemList"
import { useParams} from 'react-router-dom';

const ItemListContainer = ({title}) => {

  const [products, setProducts] = useState([])
  
  const { categoryId } = useParams()

  const {titulo} = useCartContext()
  let tituloParaMostrar = titulo

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
        <div>
        <h1 className='greeting'>{title}</h1>
        <h2 className='greeting'>{tituloParaMostrar}</h2>
        <div className='main-bkg'>            
            <ItemList products = {products} />
        </div>
        </div>
    )
}

/**/

export default ItemListContainer

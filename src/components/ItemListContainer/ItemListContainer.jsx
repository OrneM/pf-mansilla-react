import { useState, useEffect } from 'react';
import { useCartContext } from '../../context/CartContext';
import { db } from '../../firebase/dbConnection';
import { collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from "../ItemList/ItemList"
import { useParams} from 'react-router-dom';
import {Loader} from  "../Loader/Loader"; 

const ItemListContainer = ({title}) => {

  const [products, setProducts] = useState([])
  const { categoryId } = useParams()
  const [loading, setLoading] = useState(true);
  const {titulo} = useCartContext()
  let tituloParaMostrar = titulo


    useEffect(()=> {
        
      setLoading(true);

        let productsCollection = collection(db, "productos")

        if (categoryId) {
            productsCollection = query(productsCollection, where("category", "==", categoryId));
          }
         
          
          getDocs(productsCollection)
          .then(({docs}) => {
            const prodFromDocs = docs.map((doc)=>({
              id: doc.id,
              ...doc.data()
            }))
            setProducts(prodFromDocs)
            setLoading(false);
           
          })
          .catch((error) => {
            console.error("Error getting documents: ", error);
          });
        
    }, [categoryId])

    return (
        <div>
        <h1 className='greeting'>{title}</h1>
        <h2 className='greeting'>{tituloParaMostrar}</h2>
        <div className='main-bkg'>            
        { loading 
              ? <Loader /> 
              : <ItemList products={products} />}
        </div>
        </div>
    )
}

/**/

export default ItemListContainer

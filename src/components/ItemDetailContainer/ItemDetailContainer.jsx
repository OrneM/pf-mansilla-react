import { useEffect, useState } from "react"
import {Loader} from  "../Loader/Loader"; 
import {db} from '../../firebase/dbConnection';
import { collection, getDoc, doc} from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail"
import {useParams} from "react-router-dom"

const ItemDetailContainer = () => {
   const [product, setProduct] = useState({})
   const [loading, setLoading] = useState(true);
   const { itemId } = useParams()

    useEffect(()=> {
        setLoading(true);
        const productCollection = collection(db, "productos");
        const refDoc = doc(productCollection, itemId)

        getDoc(refDoc)
          .then((doc)=>{
            setProduct({id: doc.id, ...doc.data()})
            setLoading(false);
            
          })
          .catch((error) => {
            setLoading(false);
            console.error("Error getting documents: ", error);
          });
    }, [itemId])

    return (
        <div className="detail-container">
        { loading 
          ? <Loader /> 
          : <ItemDetail {...product}  />}
   
        </div>
    )
}

export default ItemDetailContainer
import { useState, useEffect } from 'react';

import { db } from '../../firebase/dbConnection';
import { collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom';
import { Loader } from "../Loader/Loader";
import PropTypes from 'prop-types';
import Hero from '../Hero/Hero';
import banner from '../../assets/banner.jpg';

const ItemListContainer = ({ title }) => {

  const [products, setProducts] = useState([])
  const { categoryId } = useParams()
  const [loading, setLoading] = useState(true);



  useEffect(() => {

    setLoading(true);

    let productsCollection = collection(db, "productos")

    if (categoryId) {
      productsCollection = query(productsCollection, where("category", "==", categoryId));
    }


    getDocs(productsCollection)
      .then(({ docs }) => {
        const prodFromDocs = docs.map((doc) => ({
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
      <Hero greeting={title} image={banner} />
      <div className='main-bkg'>
        {loading
          ? <Loader />
          : <ItemList products={products} />}
      </div>
    </div>
  )
}

ItemListContainer.propTypes = {
  title: PropTypes.string,
};

export default ItemListContainer

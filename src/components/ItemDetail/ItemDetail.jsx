import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react";
import { Link } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext";




const ItemDetail = ({id, name, image, description, price, stock}) => {

    const { addToCart  } = useCartContext();

    const handleOnBuy = (qty) => {
        console.log(`Se agregaron ${qty} productos al carrito`) 
        const item = {id, name, description, price}
        addToCart(item, qty)
    }


    return (
        <div className="card" style={{ width: '30rem', margin:'5rem' }}>
        <img src={image} className="card-img-top" alt={description}/>
        <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">Id: {id}</p>
        <p className="card-text">Descripción: {description}</p>
        <h3 className="card-text">${price}</h3>
        <p className="card-text">Stock: {stock}</p>
        <section  >
        <ItemCount stock={stock} initial={1} handleOnBuy={handleOnBuy}/>
        </section>

    </div>
</div>

    )
}

export default ItemDetail
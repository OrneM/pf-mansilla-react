
const ItemDetail = ({id, name, image, description, price, stock}) => {
    return (
        <div className="card" style={{ width: '30rem', margin:'5rem' }}>
        <img src={image} className="card-img-top" alt={description}/>
        <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">Id: {id}</p>
        <p className="card-text">Descripción: {description}</p>
        <h3 className="card-text">{price}</h3>
        <button className="btn btn-primary" variant="primary">Comprar</button>
        <p className="card-text">Stock: {stock}</p>
    </div>
</div>

    )
}

export default ItemDetail
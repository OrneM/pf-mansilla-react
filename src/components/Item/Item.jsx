import { Link } from "react-router-dom"


const Item = ({id, name, image, price, stock, description}) => {

return (

    <div className="card" style={{ width: '18rem' }}>
        <img src={image} className="card-img-top" alt={description}/>
        <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">Id: {id}</p>
        <h3 className="card-text">{price}</h3>
        <p className="card-text">Stock: {stock}</p>
        <Link className="btn btn-primary" to={`/item/${id}`}>Ver detalle</Link>
    </div>
</div>
)

}

export default Item
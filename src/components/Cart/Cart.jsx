import { useCartContext } from "../../context/CartContext"



const Cart = () => {

    const { cart, total, removeItem, clearCart } = useCartContext()

    const handleRemoveItem = (id, price, qty) => {
      removeItem(id, price, qty);
    }

    const handleClearCart = () => {
      clearCart();
    }

    return (
    <div className="table-container">
        <table className="table-primary">
          <thead>
          <tr className="table-primary">
              <th>#</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>*</th>
            </tr>
          </thead>
        <tbody>
          {cart?.map(({ id, name, price, qty }, index) => {
            return (
              <tr className="table-primary" key={index}>
                <td className="table-primary">{id}</td>
                <td className="table-primary">{name}</td>
                <td className="table-primary">${price}</td>
                <td className="table-primary">{qty}</td>
                <td className="table-primary">
                  <button className= "btn btn-secondary" variant="secondary" onClick={() => handleRemoveItem(id, price, qty)}>
                    x
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td className="table-primary" colSpan={4}>Precio total</td>
            <td> $ {total} </td>
          </tr>
        </tbody>
      </table>
      <button className= "limpiar-carrito"onClick={handleClearCart}>Limpiar Carrito</button>

    </div>
    
     
    )
  }
  
  
  export default Cart
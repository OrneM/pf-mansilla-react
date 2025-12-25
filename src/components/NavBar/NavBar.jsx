
import { Link } from 'react-router-dom'
import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/logo.svg"

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-logo"><img src={logo} alt="logo michi tienda" className="logo" /> </Link>
        <div className="navbar-shorcuts">
          <div className='navbar-toggler-container'>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/category/informatica">Informática</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/category/gaming">Gaming</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/category/accesorios">Accesorios</Link>
                </li>
              </ul>
            </div>
          </div>
          <CartWidget />
        </div>

      </div>


    </nav>
  );
}

export default NavBar
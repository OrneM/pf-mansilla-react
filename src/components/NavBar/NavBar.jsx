import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/logo.svg"

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
      <Link to="/"><img src={logo} alt="logo michi tienda" className="logo" /> </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">INICIO</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/informatica">INFORMATICA</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/gaming">GAMING</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/accesorios">ACCESORIOS</Link>
            </li>
          </ul>
        </div>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar
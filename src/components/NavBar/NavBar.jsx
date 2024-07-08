import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/logo.svg"


function NavBar () {
    return(

        /*
        <nav>
            <img src={logo} alt="logo michi tienda" className="logo"/>
            <h3>michITienda</h3>
            <div>
                <button>INFORMATICA</button>
                <button>GAMING</button>
                <button>ACCESORIOS</button>
            </div>

            <CartWidget />
        </nav>

        */

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img src={logo} alt="logo michi tienda" className="logo"/> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">INFORMATICA</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">GAMING</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">ACCESORIOS</a>
        </li>
      </ul>
    </div>
  </div>
  <CartWidget />
</nav>
    )
}

export default NavBar
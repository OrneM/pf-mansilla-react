import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/logo.svg"


function NavBar () {
    return(
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
    )
}

export default NavBar
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartContextProvider from './context/CartContext.jsx';
import { SearchProvider } from './context/SearchContext.jsx';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Contact from './components/Contact/Contact.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Cart from './components/Cart/Cart.jsx';
import Error404 from './components/Error404/Error404.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  const greeting = "Tecnología, gaming y accesorios con estilo 🐾"

  return (

    <div>
      <CartContextProvider>
        <SearchProvider>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer title={greeting} />} />
              <Route path='/category/:categoryId' element={<ItemListContainer title={greeting} />} />
              <Route path='/item/:itemId' element={<ItemDetailContainer />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
          </Router>
        </SearchProvider>
      </CartContextProvider>
    </div>

  );
}

export default App;
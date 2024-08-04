import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Error404 from './components/Error404/Error404.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  const greeting = "Bienvenidos a La michITienda"

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer title={greeting} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer title={greeting} />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer/>
       </Router>
    </div>
  );
}

export default App;
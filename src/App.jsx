import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  

  return (
    <>
    <NavBar /> 
    <ItemListContainer greeting={"Bienvenidos a la michITienda"}/> 
    </>
  )
}

export default App

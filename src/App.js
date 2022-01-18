import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ItemCount from './componentes/ItemCount';



function App() {
  return (
    
   <>
    <NavBar />
    <ItemListContainer usuario={"Darío"}/>
    
   </>

  );
}

export default App;

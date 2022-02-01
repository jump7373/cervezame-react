import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ItemDetail from './componentes/ItemDetail';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Cart from './componentes/Cart';


function App() {
  return (

    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          
          <Route exact path="/">
            <ItemListContainer />
          </Route>

          <Route path="/category/:itemMarca">
            <ItemListContainer/>
          </Route>

          <Route path="/item/:itemId">
            <ItemDetailContainer />
          </Route>
          
          <Route exact path="/cart" element={<Cart/>}>
            <Cart />
          </Route>
          
        </Switch>
      </BrowserRouter>
    </>

  );
}

export default App;

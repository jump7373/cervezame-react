import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Cart from './componentes/Cart';
import CartContext from './context/CartContext';
import Form from './componentes/Form';



function App() {
  return (

    <>
      <CartContext>
        <BrowserRouter>
          <NavBar />
          <Switch>

            <Route exact path="/">
              <ItemListContainer />
            </Route>

            <Route path="/category/:itemMarca">
              <ItemListContainer />
            </Route>

            <Route path="/item/:itemId">
              <ItemDetailContainer />
            </Route>

            <Route exact path="/cart">
              <Cart />
            </Route>

            <Route exact path="/formulario-de-compra">
              <Form />
            </Route>

          </Switch>
        </BrowserRouter>
      </CartContext>
    </>

  );
}

export default App;

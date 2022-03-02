import './App.css';
import NavBar from './componentes/HomePage/NavBar';
import ItemListContainer from './componentes/Item/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './componentes/Item/ItemDetailContainer';
import Cart from './componentes/Cart/Cart';
import CartContext from './context/CartContext';
import Form from './componentes/Form';
import Inventario from './componentes/Inventario';
import Footer from './componentes/HomePage/Footer';
import HomePage from './componentes/HomePage/HomePage';
import Nosotros from './componentes/Nosotros/Nosotros';



function App() {
  return (

    <>
      <CartContext>
        <BrowserRouter>
          <NavBar />
          <Switch>

            <Route exact path="/">
              <HomePage />
            </Route>

            <Route path="/cervezas">
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

            <Route exact path="/cargarInventario">
              <Inventario />
            </Route>

            <Route exact path="/nosotros">
              <Nosotros/>
            </Route>

          </Switch>
          <Footer/>
        </BrowserRouter>
      </CartContext>
    </>

  );
}

export default App;

import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import Cart from "./components/Cart/Cart";
import ProductList2 from "./pages/Category2/ProductList2";
import ProductList3 from "./pages/Category3/ProductList3";
import Product from "./pages/Product/Product";
import Home from "./pages/Home";
import ProductList from "./pages/Category1/ProductList";
import {connect} from "react-redux";
import Form from "./components/Form/Form";
import About from "./pages/About/About";



function App(current) {
  return (
    <>
    
    <Router>
      
      <Switch>
              
        <Route path="/productos">
          <ProductList />
        </Route>
        <Route path="/productos2">
          <ProductList2 />
        </Route>
        <Route path="/productos3">
          <ProductList3 />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/formulario">
          <Form />
        </Route>
        
        
        <Route exact path="/carrito" component={Cart}/>
          {!current ? (
            <Redirect to="/"/>
          ): (
            <Route path="/product/:id" component={Product}/>
          )}
        <Route path="/">
          <Home />
        </Route>
        
      </Switch>
    </Router>
    </>
  );
}

const mapStateToProps = state => {
  return{
    current: state.shop.current
  }
}
export default connect (mapStateToProps)(App);

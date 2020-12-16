import './App.css';
import Header from "./Header.js"
import Cart from "./Cart.js"
import Products from "./Products.js"
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';

function App() {
  return (
    <div>
    <Header></Header>
    <Switch>
         <Route path='/' exact  component={Products}></Route>
         <Route path='/products' exact  component={Products}></Route>
         <Route path='/products/:id' exact component={Products}></Route>
         <Route path='/cart/' exact component={Cart}></Route>
    </Switch>
  </div>
  );
}

export default App;

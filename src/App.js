import './App.css';
import Header from "./Header.js"
import Cart from "./Cart.js"
import Products from "./Products.js"
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import AppContext from './context/AppContext';
import Ticket from './Ticket.js';

function App() {
  return (
    <div>
      <AppContext>
        <Header></Header>
        <Switch>
          <Route path='/' exact component={Products}></Route>
          <Route path='/products' exact component={Products}></Route>
          <Route path='/cart' exact component={Cart}></Route>
          <Route path='/ticket' exact component={Ticket}></Route>
        </Switch>
        </AppContext>

    </div>
  );
}

export default App;

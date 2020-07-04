import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavBar from './components/common/NavBar';
import Home from './components/home/Home';
import SeePedido from './components/pedidos/SeePedido';

function App() {
  return (
    <div >


      <Router>
        <NavBar/>
      <div>

        <Switch>
          <Route path="/pedido/:uid">
            <SeePedido/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>

      </div>
    </Router>
    </div>
  );
}

export default App;

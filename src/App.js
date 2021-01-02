import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";


function App() {
  return (
   <Router>
      <div className="app">
        <Switch>
          <Route path="/Checkout">
            <Header/>
            <Checkout />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          {/* This is the default rout */}
          <Route path="/">
            <Header/>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


// localhost.com
// localhost.com/checkout
// localhost.com/login
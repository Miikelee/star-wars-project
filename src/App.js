import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./js/views/Home";
import Navbar from "./js/components/Navbar";
import injectContext from "./js/store/appContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import Singlecard from "./js/views/SingleCard";


const App = () => {
  return (
    <Router>
      <Navbar estilo={{width:"4rem"}}/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/single">
          <Singlecard />
        </Route>
        <Route render={()=> <h1> Not Found</h1>}></Route>
      </Switch>
    </Router>
  )
};

export default injectContext(App);
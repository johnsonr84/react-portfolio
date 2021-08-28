import React from "react";
import Home from "./pages/home"
import Portfolio from "./pages/portfolio"
import Story from "./pages/story"
import Contact from "./pages/contact"
import Navbar from './components/Navbar'
import {  Route, Switch } from "react-router-dom";
import './App.css';
// import Portfolio from "./pages/portfolio";

function App() {
  return (
    <Route>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/story" component={Story} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Route>
  );
}

export default App;

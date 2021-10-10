import React from "react";
import './App.css';
import './index.css';
import Home from "./pages/home"
import Portfolio from "./pages/portfolio"
import Story from "./pages/story"
// import Contact from "./pages/contact"
import Navbar from './components/Navbar'
import Nav from './components/Footer'
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <Route>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/story" component={Story} />
        {/* <Route exact path="/contact" component={Contact} /> */}
      </Switch>
      <Nav />
    </Route>
  );
}

export default App;

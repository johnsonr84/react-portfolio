import React from "react";
import Home from "./pages/home"
import Navbar from './components/Navbar'
import { BrowserRouter as Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Route>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Route>
  );
}

export default App;

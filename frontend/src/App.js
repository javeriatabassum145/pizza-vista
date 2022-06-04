import "./App.css";
import TopBar from "./components/TopBar.js";
import HeroBanner from "./components/HeroBanner";
import Menu from "./components/Menu"
import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from 'react';
import CartScreen from "./components/CartScreen";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
     <Switch>
        <Route path="/" component={HeroBanner} exact />
        <Route path="/menu" component={Menu} exact />
        <Route path="/cart" component={CartScreen} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
      </Switch>

    </BrowserRouter>
  );
}

export default App;

import React from "react";
import Pizza from "./Siparisler/Pizza";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        Teknolojik Yemekler
        <img src="../Assets/logo.svg" alt="Teknolojik Yemekler logo" />
      </header>
      <Switch>
        <Route path="/" exact></Route>
        <Route path="/pizza">
          <Pizza />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default App;

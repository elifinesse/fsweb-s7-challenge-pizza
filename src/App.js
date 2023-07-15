import React from "react";
import Pizza from "./Siparisler/Pizza";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1>Teknolojik Yemekler</h1>
      <p>Burdaki kodu silip kendi headerınızı ekleyebilirsiniz</p>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact></Route>
          <Route path="/pizza">
            <Pizza />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;

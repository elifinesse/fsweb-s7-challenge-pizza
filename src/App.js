import React from "react";
import Pizza from "./components/Pizza";
import Anasayfa from "./components/Anasayfa";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Anasayfa />
        </Route>
        <Route path="/pizza">
          <Pizza />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default App;

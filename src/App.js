import React from "react";
import Pizza from "./Siparisler/Pizza";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
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

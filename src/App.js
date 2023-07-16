import React from "react";
import Pizza from "./components/Pizza";
import Anasayfa from "./components/Anasayfa";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import SiparisOnay from "./components/SiparisOnay";

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
        <Route path="/onay">
          <SiparisOnay />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default App;

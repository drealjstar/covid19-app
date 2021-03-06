import React from "react";
import "./App.css";
import Stat from "./Component/stat";
import Contact from "./Component/contact";
import About from "./Component/about";
import Policy from "./Component/policy";
import Services from "./Component/services";
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>

          <Route exact path="/">
            <Stat />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/policy">
            <Policy />
          </Route>

          <Route exact path="/services">
            <Services />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router'
import { Provider } from "react-redux";
import {FirstPage} from "./pages/FirstPage";
import {AboutUs} from "./pages/AboutUs";
import {OurContacts} from "./pages/OurContacts";
import {PizzaDataStore} from "./data/DataStore";
import {PizzaConnector} from "./components/PizzaConnector";
import {Checkout} from "./pages/Checkout";

function App() {
  return (
      <Provider store = {PizzaDataStore} >
      <Router>
          <Switch>
              <Route exact path="/">
                  <FirstPage />
              </Route>
          </Switch>
          <Switch>
              <Route path="/about">
                  <AboutUs/>
              </Route>
          </Switch>
          <Switch>
              <Route path="/contacts">
                  <OurContacts/>
              </Route>
          </Switch>
          <Switch>
              <Route path="/constructor">
                     <PizzaConnector />
              </Route>
          </Switch>
          <Switch>
              <Route path="/checkout">
                  <Checkout />
              </Route>
          </Switch>
      </Router>
       </Provider>
  );
}

export default App;

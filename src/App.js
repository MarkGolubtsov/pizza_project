import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router'
import {Provider} from 'react-redux';
import {PizzaDataStore} from './data/DataStore';
import {PizzaConnector} from './components/PizzaConnector';
import withHeader from './hoc/withHeader';
import {About} from './components/About';
import {Main} from './components/Main';
import {Contacts} from './components/Contacts';
import {Thanks} from "./components/Thanks";
import {CheckoutConnector} from "./components/CheckoutConnector";

function App() {
    return (
        <Provider store={PizzaDataStore}>
            <Router>
                <Switch>
                    <Route exact path='/' component={withHeader(Main)}/>
                    <Route path='/about' component={withHeader(About)}/>
                    <Route path='/contacts' component={withHeader(Contacts)}/>
                    <Route path='/constructor' component={withHeader(PizzaConnector)}/>
                    <Route exact path='/checkout' component={CheckoutConnector}/>
                    <Route exact path='/checkout/thanks' component={Thanks}/>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;

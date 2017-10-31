import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';
import Appp from './Appp';

// responsive drawer
import { responsiveStateReducer } from 'redux-responsive';
import { responsiveDrawer } from 'material-ui-responsive-drawer';

injectTapEventPlugin();

const RootReducer = combineReducers({
    browser: responsiveStateReducer,
    responsiveDrawer: responsiveDrawer
});
const store = createStore(RootReducer);

ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <Switch>
                <Route component={App} />
                <Route path="/" component={App} />
                <Route path="/mind" component={Appp} />
                <Route path="/favorite" component={App} />
                <Route path="/blog" component={App} />
                <Route path="/contact" component={App} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('app')
);

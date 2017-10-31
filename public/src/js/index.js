import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';

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
            <App />
        </Router>
    </Provider>,
    document.getElementById('app')
);

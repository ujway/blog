import React, { Component } from 'react';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import myTheme from './Theme'

import Sidebar from './Sidebar';
import Body from "./Body";

class App extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         open: true
    //     };
    // }
    render() {
        return (
            <MuiThemeProvider muiTheme={myTheme}>
                <Sidebar />
                <Body />
            </MuiThemeProvider>
        );
    }
}

// used in ResponsiveDrawer
function mapStateToProps(state) {
    return {state};
}

export default connect(mapStateToProps)(App);
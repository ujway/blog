import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import myTheme from './Theme'
import Sidebar from './Sidebar';
import Body from "./Body";
import Loader from "./Loader";

class App extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true
        };
    }
    componentDidMount() {
        setTimeout(() => this.setState({ isLoading: false }), 1500);
    }
    render() {
        const { isLoading } = this.state;
        if (isLoading) {
            // render returns loader when app is not ready
            return (
                <Loader isLoading={this.state.isLoading}/>
            );
        }
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
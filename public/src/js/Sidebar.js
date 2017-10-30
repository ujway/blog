import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import config from './Config'
import { ResponsiveDrawer } from "material-ui-responsive-drawer";
import { Scrollbars } from "react-custom-scrollbars";

const drawerWidth=config.drawer_width;

export default class Sidebar extends Component {
    render() {
        return (
            <ResponsiveDrawer width={drawerWidth}>
                <Scrollbars>
                    <MenuItem>Mind</MenuItem>
                    <MenuItem>Favorite</MenuItem>
                    <MenuItem>Blog</MenuItem>
                    <MenuItem>Contact</MenuItem>
                </Scrollbars>
            </ResponsiveDrawer>
        );
    }
}
import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import config from './Config'
import Avatar from 'material-ui/Avatar';
import { ResponsiveDrawer } from "material-ui-responsive-drawer";
import { Scrollbars } from "react-custom-scrollbars";
import { List, ListItem } from "material-ui/List";
import { Link } from 'react-router-dom'

const drawerWidth=config.drawer_width;

export default class Sidebar extends Component {
    render() {
        return (
            <ResponsiveDrawer width={drawerWidth}>
                <Scrollbars>
                    <List style={{paddingTop: '25px'}}>
                        <ListItem
                            disabled
                            primaryText='Yuji Sato'
                            style={{fontSize: '1.2em'}}
                            leftAvatar={
                                <Avatar
                                    src='/public/img/my-picture.jpg'
                                    size={40}
                                    style={{marginRight: '10px'}}
                                />
                            }
                        />
                    </List>
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <MenuItem style={{fontSize: '1.2em', color: '#fff'}}>Top</MenuItem>
                    </Link>
                    <Link to="/mind" style={{textDecoration: 'none'}}>
                        <MenuItem style={{fontSize: '1.2em', color: '#fff'}}>Mind</MenuItem>
                    </Link>
                    <Link to="/favorite" style={{textDecoration: 'none'}}>
                        <MenuItem style={{fontSize: '1.2em', color: '#fff'}}>Favorite</MenuItem>
                    </Link>
                    <Link to="/blog" style={{textDecoration: 'none'}}>
                        <MenuItem style={{fontSize: '1.2em', color: '#fff'}}>Blog</MenuItem>
                    </Link>
                    <Link to="/contact" style={{textDecoration: 'none'}}>
                        <MenuItem style={{fontSize: '1.2em', color: '#fff'}}>Contact</MenuItem>
                    </Link>
                </Scrollbars>
            </ResponsiveDrawer>
        );
    }
}
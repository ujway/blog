import React, { Component } from 'react';
import { BodyContainer } from 'material-ui-responsive-drawer'
import config from './Config'
import Avatar from 'material-ui/Avatar';

const drawerWidth=config.drawer_width;
const bodyContainerStyle={
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'YuGothic, Roboto, sans-serif'
};

export default class Body extends Component {
    render() {
        return (
            <BodyContainer width={drawerWidth} style={bodyContainerStyle}>
                <div style={{textAlign: 'center'}}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Avatar
                            src='/public/img/my-picture.jpg'
                            size={70}
                            style={{marginRight: '10px'}}
                        />
                        <h1>Yuji Sato</h1>
                    </div>
                    <h2>Web Developer / technical Director</h2>
                </div>
            </BodyContainer>
        );
    }
}
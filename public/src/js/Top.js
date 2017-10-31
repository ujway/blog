import React, { Component } from 'react';
import { BodyContainer } from 'material-ui-responsive-drawer'
import config from './Config'
import { white } from "material-ui/styles/colors";

const drawerWidth=config.drawer_width;
const bodyContainerStyle={
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'YuGothic, Roboto, sans-serif',
    letterSpacing: '0.2em',
    backgroundImage: "url('/public/img/top1.jpg')",
    backgroundSize: 'cover'
};

export default class Top extends Component {
    render() {
        return (
            <BodyContainer width={drawerWidth} style={bodyContainerStyle}>
                <div style={{textAlign: 'center'}}>
                    <h1 style={{fontSize: '3em', fontWeight: 'normal', color: white}}>Yuji Sato</h1>
                    <h2 style={{fontSize: '1.5em', fontWeight: 'normal', color: white}}>Web Developer / technical Director</h2>
                </div>
            </BodyContainer>
        );
    }
}
import React, { Component } from 'react';
import { RingLoader } from 'react-spinners';
import { BodyContainer } from "material-ui-responsive-drawer";

const bodyContainerStyle={
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'YuGothic, Roboto, sans-serif',
    backgroundColor: '#131a21',
    flexFlow: 'column nowrap',
    opacity: '0.9',
};

const loadingText = {
    color: '#ffffff',
    marginTop: '40px',
    fontFamily: 'YuGothic, Roboto, sans-serif',
    letterSpacing: '0.2em'
};

export default class Loader extends Component {
    render() {
        return (
            <BodyContainer width={0} style={bodyContainerStyle}>
                <RingLoader
                    color={'#ffffff'}
                    loading={this.props.isLoading}
                />
                <p style={loadingText}>Loading.....</p>
            </BodyContainer>
        );
    }
}
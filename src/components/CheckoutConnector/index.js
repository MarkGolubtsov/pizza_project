import React, { Component } from 'react';
import {clearCart } from '../../data/CartActionCreators';
import { connect } from 'react-redux';
import { Checkout } from '../Checkout';


const mapStateToProps = (dataStore) => ({
    ...dataStore
});

const mapDispatchToProps = {
    clearCart
};

export const CheckoutConnector = connect(mapStateToProps, mapDispatchToProps)(
    class extends Component {
        render() {
            return <Checkout {...this.props}/>
        }


    }
);

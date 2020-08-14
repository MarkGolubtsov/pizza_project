import React, { Component } from 'react';
import {ToppingList} from '../ToppingList';
import {Header} from '../Header';
import './style.sass';
import {PizzaView} from '../PizzaView';
import {Cart} from '../Cart';

export class PizzaConstructor extends Component {

    handleAddToCart_RemoveFromCart = (...args) => {
        this.props.addToCart_RemoveFromCart(...args);
    };

    render() {
        return <div className='container-fluid'>
            <div className='row'>

                <div  className='col-4 p-2' >
                    <ToppingList toppings={ this.props.toppings }
                                 cart = {this.props.cart ? this.props.cart : []}
                                 handleAddToCart_RemoveFromCart={ this.handleAddToCart_RemoveFromCart }/>
                </div>
                <div className='col-8 p-2'>

                    <div className='pizza row-cols-2'>
                        <PizzaView cart = {this.props.cart ? this.props.cart : []}/>
                    </div>
                    <div className='check'>
                        <Cart {...this.props}/>
                    </div>
                </div>
            </div>
        </div>
    }
}

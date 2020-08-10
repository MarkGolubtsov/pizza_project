import React, { Component } from "react";

export class CartDetailsRows extends Component {

    render() {
        if (!this.props.cart || this.props.cart.length === 0) {
            return <tr>
                <td colSpan="5">Вы ничего не выбрали</td>
            </tr>
        } else {
            return <React.Fragment>
                <tr key= "0" >
                    <td>основа для пиццы</td>
                    <td>2.00</td>
                </tr>
                {this.props.cart.map(item =>
                    <tr key={item.topping.id}>
                        <td>{item.topping.name}</td>
                        <td>{item.topping.cost.toFixed(2)}</td>
                    </tr>
                )}
                <tr>
                    <th  className="text-left">Итого:</th>
                    <th >{this.props.cartCost.toFixed(2)}</th>
                </tr>
            </React.Fragment>
        }
    }
}

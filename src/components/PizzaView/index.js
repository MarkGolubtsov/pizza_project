import React, { Component } from "react";
import './style.sass';
import pizza from "../../assets/images/toppings/pizza.svg"

export class PizzaView extends Component {
    render() {
        return (
            <div className="pizza-toppings-wrap" id="pizza">
                <img className="pizza-toppings" src={pizza} alt="pizza"/>
            </div>
        )
    }
}

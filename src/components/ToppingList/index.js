import React, { Component } from "react";

import './style.sass';

export class ToppingList extends Component {
    render() {
        if (this.props.toppings == null || this.props.toppings.length === 0) {
            return <h5 className="p-2">нет начинок</h5>
        }

        return <div className="toppingList">
            { this.props.toppings.map(t => {
                const {id, name, toppingName, cost, weight, path} = t;
                const svg = require(`../../${path}`);

                return <button className="toppings card  bg-light" key={t.id}
                            onClick={() => this.props.handleAddToCart_RemoveFromCart(t)}>
                        <img src={svg} alt={id}/>
                        <div><p>
                            {t.name}
                            <br/>
                            {t.cost.toFixed(2)} бел. руб.
                            <br/>
                            {t.weight} грамм
                        </p></div>

                    </button>
                }
            )}
        </div>


    }
}
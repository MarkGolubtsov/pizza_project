import React, {Component} from 'react';

import './style.sass';

export class ToppingList extends Component {
    render() {
        const {toppings, handleAddToCart_RemoveFromCart} = this.props;

        if (toppings == null || toppings.length === 0) {
            return <h5 className='p-2'>нет начинок</h5>
        }

        return <div className='toppingList'>
            {toppings.map(t => {
                    const {id, path, name, cost, weight} = t;
                    const svg = require(`../../${path}`);

                    return <button className='toppings card  bg-light' key={t.id}
                                   onClick={() => handleAddToCart_RemoveFromCart(t)}>
                        <img src={svg} alt={id}/>
                        <div><p>
                            {name}
                            <br/>
                            {cost.toFixed(2)} бел. руб.
                            <br/>
                            {weight} грамм
                        </p></div>

                    </button>
                }
            )}
        </div>


    }
}

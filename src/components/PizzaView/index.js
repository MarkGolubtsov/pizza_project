import React, {Component} from 'react';
import './style.sass';
import pizza from '../../assets/images/toppings/pizza.svg'


export class PizzaView extends Component {

    render() {
        const {cart} = this.props;

        const toppingList = cart.map(t => {
            const svg = require(`../../assets/images/toppings/${t.topping.toppingName}.svg`);
            return <img className="animation" key={t.topping.id} src={svg} alt={t.topping.id}/>

        });
        return (
            <div className='pizza-toppings-wrap' id='pizza'>
                {toppingList}
                <img className='pizza-toppings' src={pizza} alt='pizza'/>
            </div>
        )
    }
}

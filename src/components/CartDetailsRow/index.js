import React, {Component} from 'react';

export class CartDetailsRows extends Component {

    render() {
        const {cart, cartCost} = this.props;
        if (!cart || cart.length === 0) {
            return <tr>
                <td colSpan='5'>Вы ничего не выбрали</td>
            </tr>
        } else {
            return <React.Fragment>
                <tr key='0'>
                    <td>основа для пиццы</td>
                    <td>2.00</td>
                </tr>
                {cart.map(({id, name, cost}) =>
                    <tr key={id}>
                        <td>{name}</td>
                        <td>{cost.toFixed(2)}</td>
                    </tr>
                )}
                <tr>
                    <th className='text-left'>Итого:</th>
                    <th>{cartCost.toFixed(2)}</th>
                </tr>
            </React.Fragment>
        }
    }
}

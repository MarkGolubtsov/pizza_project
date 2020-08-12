import React, { Component } from 'react';
import {ValidatedForm} from "../ValidatedForm";

export class Checkout extends Component {
    constructor(props) {
        super(props);
        this.defaultAttrs = { type: 'text', required: true };
        this.formModel = [
            { label: 'Имя'},
            { label: 'Email', attrs: { type: 'email' }},
            { label: 'Адрес' },
            { label: 'Город'},
            { label: 'Телофон'},
            ]
    }

    render() {
        return <div className='container-fluid'>
            <ValidatedForm formModel={ this.formModel } {...this.props}
                           defaultAttrs={ this.defaultAttrs }/>
        </div>
    }
}

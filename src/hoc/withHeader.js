import React from 'react';
import {Header} from '../components/Header';

export default function (WrappedComponent) {
    return class extends React.Component {
        render() {
            return (
                <>
                    <Header/>
                    <WrappedComponent/>
                </>
            );
        }
    };
}

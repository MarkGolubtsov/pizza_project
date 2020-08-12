import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Thanks extends Component {
    render() {
        return <div>
            <div className="m-2 text-center">
                <h2>Спасибо!</h2>
                <p>Спасибо за Ваш заказ</p>
                <p>Ваш заказ #1</p>
                <Link to="/" className="btn btn-primary">
                    Вернуться на главную
                </Link>
            </div>
        </div>
    }
}
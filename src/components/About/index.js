import React from 'react';
import "./style.sass";

export function About(){
    return <div className="about">
        <h1>Добро пожаловать в Pizzeria Belarus!</h1>
        <p>Pizzeria – сеть пиццерий №1 в мире по данным глобальных розничных продаж.
            <br/>
            Pizzeria, основанная в 1960 году, на сегодняшний день:
        </p>
        <ul>
            <li>присутствует в 90 странах мира</li>
            <li>насчитывает более 15 000 пиццерий</li>
            <li>доставляет 2 000 000 пицц ежедневно</li>
            <li>готовит более 400 000 000 пицц в год</li>
        </ul>
        <p>Сегодня <b>Pizzeria</b> BELARUS это:</p>
<div className="pizzeria">
    <div className="description"><h1>27</h1> <p>пиццерий</p></div>
    <div className="description"><h1>5 регионов </h1><p>Минск, Брест, Гродно, Гомель, Могилёв</p></div>
    <div className="description"><h1>900+</h1><p>сотрудников</p></div>
</div>
    </div>
}
import React from 'react';
import "./style.sass";
import logo from "../../assets/images/logo.svg"
import {Link} from "react-router-dom";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { Breadcrumbs } from '@material-ui/core';

export function Header(){

    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: 0,
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }));

    const classes = useStyles();
    const [city, setCity] = React.useState('');

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const cities = [
        { value: "Minsk", city: "Минск"},
        { value:"Brest", city: "Брест"},
        { value:"Grodno", city: "Гродно"},
        { value:"Gomel", city: "Гомель"},
        { value:"Mogilev", city: "Могилёв"},
    ];

    return <header>

    <div className="box1">
        <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
             <Link to={"/"} style={{textDecoration: 'none'}}> <div className="nav"><img src={logo} alt="svg"/> <h1> Pizzeria</h1></div></Link>
             <Link to={"/constructor"} style={{textDecoration: 'none'}}><div className="nav"> <h2>собрать пиццу</h2></div></Link>
             <Link to={"/contacts"} style={{textDecoration: 'none'}}><div className="nav"> <h2>контакты</h2></div></Link>
             <Link to={"/about"} style={{textDecoration: 'none'}}><div className="nav"> <h2>о нас</h2></div></Link>
        </Breadcrumbs>
    </div>


        <div className="cities box2">
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Город</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={city}
                    onChange={handleChange}>
                    {cities.map(city =>
                        <MenuItem className="menuItem" value={city.value}>
                            {city.city}
                        </MenuItem>)}
                </Select>
            </FormControl>
        </div>

    </header>
}


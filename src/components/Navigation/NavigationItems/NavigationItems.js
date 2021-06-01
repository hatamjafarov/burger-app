import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active> Özün hazırla</NavigationItem>
            <NavigationItem link="/" >Sifariş et</NavigationItem>
        </ul>
    );
};

export default NavigationItems;

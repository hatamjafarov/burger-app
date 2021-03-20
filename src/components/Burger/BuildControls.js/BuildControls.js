import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Meat", type: "meat" },
    { label: "Cheese", type: "cheese" },
];

const BuildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <div>Burger Price: <strong>{props.price}</strong></div>
            {controls.map((ctrl) => (
                <BuildControl
                    remove={()=>props.removeIngredient(ctrl.type)}
                    added={() => props.ingredientAdded(ctrl.type)}
                    key={ctrl.label}
                    label={ctrl.label}
                    disabled={props.disabled[ctrl.type]}
                />
            ))}
            <button className={classes.OrderButton} disabled={!props.purchasable}>Sifariş et</button>
        </div>
    );
};

export default BuildControls;

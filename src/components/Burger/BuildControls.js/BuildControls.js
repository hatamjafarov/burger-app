import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    { label: "Salat", type: "salat" },
    { label: "Pomidor", type: "pomidor" },
    { label: "Ət", type: "ət" },
    { label: "Pendir", type: "pendir" },
];

const BuildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <div>
                Qiymət: <strong>{props.price} </strong>₼
            </div>
            {controls.map((ctrl) => (
                <BuildControl
                    remove={() => props.removeIngredient(ctrl.type)}
                    added={() => props.ingredientAdded(ctrl.type)}
                    key={ctrl.label}
                    label={ctrl.label}
                    disabled={props.disabled[ctrl.type]}
                />
            ))}
            <button
                className={classes.OrderButton}
                onClick={props.ordered}
                disabled={!props.purchasable}
            >
                Sifariş et
            </button>
        </div>
    );
};

export default BuildControls;

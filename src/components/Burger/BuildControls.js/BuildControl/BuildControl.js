import React from "react";
import classes from "./BuildControl.module.css";

const BuildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button onClick={props.remove} className={classes.Less} disabled={props.disabled}>Çıx</button>
            <button onClick={props.added} className={classes.More}>
                Əlavə et
            </button>
        </div>
    );
};

export default BuildControl;

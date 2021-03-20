import React from "react";
import Auxilary from "../../../hoc/Auxilary";

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
        return (
            <li key={igKey}>
                <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
                {props.ingredients[igKey]}
            </li>
        );
    });
    return (
        <Auxilary>
            <h3>Sənin sifarişin: </h3>
            <p>Burgerin tərkibi aşağıdakı kimidir:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Sifarişə davam?</p>
        </Auxilary>
    );
};

export default OrderSummary;

import React from "react";
import Auxilary from "../../../hoc/Auxilary";
import Button from "../../UI/Button/Button";

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
            <p><strong>Qiymət</strong>: {props.price}</p>
            <p>Sifarişə davam?</p>
            <Button btnType="Danger" clicked={props.cancel}>İMTİNA</Button>
            <Button btnType="Success" clicked={props.continue}>DAVAM</Button>
        </Auxilary>
    );
};

export default OrderSummary;

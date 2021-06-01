import React, { Component } from "react";
import Auxilary from "../../../hoc/Auxilary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
    componentDidUpdate(){
        console.log('[Order Summary] updated!')
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(
            (igKey) => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: "capitalize" }}>
                            {igKey}
                        </span>
                        : {this.props.ingredients[igKey]}
                    </li>
                );
            }
        );
        return (
            <Auxilary>
                <h3>Sənin sifarişin: </h3>
                <p>Burgerin tərkibi aşağıdakı kimidir:</p>
                <ul>{ingredientSummary}</ul>
                <p>
                    <strong>Qiymət</strong>: {this.props.price}
                </p>
                <p>Sifarişə davam?</p>
                <Button btnType="Danger" clicked={this.props.cancel}>
                    İMTİNA
                </Button>
                <Button btnType="Success" clicked={this.props.continue}>
                    DAVAM
                </Button>
            </Auxilary>
        );
    }
}

export default OrderSummary;

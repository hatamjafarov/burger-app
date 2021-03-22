import React, { Component } from "react";
import classes from "./Layout.module.css";

import Auxilary from "../../hoc/Auxilary";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {
        showSideDrawer: false,
    };

    sideDrawerCloseHandler = () => {
        this.setState({
            showSideDrawer: !this.state.showSideDrawer,
        });
    };
    sideDrawerToggleHandler = () => {
        this.setState({
            showSideDrawer: !this.state.showSideDrawer,
        });
    };

    render() {
        return (
            <Auxilary>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHandler}
                />
                <main className={classes.Content}>{this.props.children}</main>
            </Auxilary>
        );
    }
}

export default Layout;

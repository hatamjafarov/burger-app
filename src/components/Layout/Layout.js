import React from "react";
import classes from "./Layout.module.css";

import Auxilary from "../../hoc/Auxilary";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = (props) => {
    return (
        <Auxilary>
            <Toolbar />
            <main className={classes.Content}>{props.children}</main>
        </Auxilary>
    );
};

export default Layout;

import React from "react";
import classes from "./Layout.module.css";

import Auxilary from "../../hoc/Auxilary";

const Layout = (props) => {
  return (
    <Auxilary >
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </Auxilary>
  );
};

export default Layout;

import React, { Component, Fragment } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import DrawerShow from "./DrawerShow";

class Menu extends Component {
  state = {
    drawerIsOpen: false,
    navBarColorShow: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandler);
  }

  scrollHandler = () =>
    window.scrollY > 0
      ? this.setState({
          ...this.state,
          navBarColorShow: true
        })
      : this.setState({
          ...this.state,
          navBarColorShow: false
        });

  drawerHandler = () =>
    this.setState({
      ...this.state,
      drawerIsOpen: !this.state.drawerIsOpen
    });
  render() {
    const { navBarColorShow } = this.state;
    return (
      <Fragment>
        <AppBar
          position="fixed"
          style={{
            backgroundColor: navBarColorShow ? "#2f2f2f" : "transparent",
            boxShadow: "none"
          }}
        >
          <Toolbar variant="dense">
            <div className="header_logo">
              <div className="header_logo_venue font_righteous">
                {" "}
                Watershedfest{" "}
              </div>{" "}
              <div className="header_logo_title"> Music Festival </div>{" "}
            </div>{" "}
            <IconButton color="inherit" onClick={this.drawerHandler}>
              <MenuIcon fontSize="large" />
            </IconButton>{" "}
          </Toolbar>{" "}
        </AppBar>{" "}
        <DrawerShow
          isOpen={this.state.drawerIsOpen}
          onClose={this.drawerHandler}
        />{" "}
      </Fragment>
    );
  }
}

export default Menu;

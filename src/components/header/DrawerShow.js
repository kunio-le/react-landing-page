import React from "react";

import { scroller } from "react-scroll";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const DrawerShow = props => {
  const scrollToElement = element =>
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true
    });
  const listItem = [
    {
      name: "HomePage"
    },
    {
      name: "VenueInf"
    },
    {
      name: "Highlight"
    },
    {
      name: "Location"
    }
  ];
  const fullList = (
    <List>
      {" "}
      {listItem.map((item, index) => (
        <ListItem button key={index} onClick={() => scrollToElement(item.name)}>
          {" "}
          {item.name}{" "}
        </ListItem>
      ))}{" "}
    </List>
  );
  return (
    <Drawer anchor="right" open={props.isOpen} onClose={props.onClose}>
      <div
        tabIndex={0}
        role="button"
        onClick={props.onClose}
        onKeyDown={props.onClose}
      >
        {" "}
        {fullList}{" "}
      </div>{" "}
    </Drawer>
  );
};

export default DrawerShow;

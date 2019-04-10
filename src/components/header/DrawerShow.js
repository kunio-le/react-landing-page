import React from "react";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const DrawerShow = props => {
  const listItem = [
    {
      name: "HomePage",
      linkTo: "#"
    },
    {
      name: "Event",
      linkTo: "#"
    },
    {
      name: "Book Ticket",
      linkTo: "#"
    },
    {
      name: "Location",
      linkTo: "#"
    }
  ];
  const fullList = (
    <List>
      {" "}
      {listItem.map((item, index) => (
        <ListItem button key={index} onClick={() => console.log("click")}>
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

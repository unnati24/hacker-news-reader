import React from "react";
import {
  Drawer,
  Typography,
  Input,
  Divider,
  makeStyles,
} from "@material-ui/core";
import SortSection from "./SortSection";
import FilterSection from "./FilterSection";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  heading: {
    color: "#b9e3c6",
    fontFamily: "Acme, sans-serif",
    padding: "30px 0px",
  },
  search: {
    backgroundColor: "#f1f2eb",
    width: "250px",
    margin: "30px",
    borderRadius: "6px",
    padding: "5px",
    border: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#272932",
  },
  button: {
    background: "none",
    border: "none",
    cursor: "pointer",
    width: "60px",
    height: "35px",
  },
  flexDiv: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
}));

const DrawerContent = ({ setValue, setSortOrder, active, setActive }) => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <Typography variant="h3" className={classes.heading} align="center">
        Hacker News
      </Typography>
      <Divider />
      <Input
        placeholder="Search"
        margin="dense"
        className={classes.search}
        onChange={(e) => setValue(e.target.value)}
      />
      <Divider />
      <SortSection
        flexDiv={classes.flexDiv}
        heading={classes.heading}
        button={classes.button}
        setSortOrder={setSortOrder}
      />
      <Divider />
      <FilterSection
        flexDiv={classes.flexDiv}
        active={active}
        setActive={setActive}
      />
    </Drawer>
  );
};

export default DrawerContent;

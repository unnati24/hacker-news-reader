import React from "react";
import { makeStyles } from "@material-ui/core";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "20px",
    color: "white",
    background: "#b5e0ba",
  },
  button: {
    fontWeight: "700",
    fontSize: "15px",
    padding: "10px 60px",
    margin: "5px",
  },
}));

const FilterSection = ({ flexDiv, active, setActive }) => {
  const classes = useStyles();

  const handleClick = (event, newState) => {
    setActive(newState);
  };

  return (
    <div className={flexDiv}>
      <ToggleButtonGroup
        orientation="vertical"
        value={active}
        exclusive
        size="small"
        className={classes.root}
        onChange={handleClick}
        aria-label="text alignment"
      >
        <ToggleButton
          className={classes.button}
          value="new"
          aria-label="left aligned"
        >
          New Stories
        </ToggleButton>
        <ToggleButton
          className={classes.button}
          value="top"
          aria-label="centered"
        >
          Top Stories
        </ToggleButton>
        <ToggleButton
          className={classes.button}
          value="best"
          aria-label="centered"
        >
          Best Stories
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default FilterSection;

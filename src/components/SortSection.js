import React from "react";
import { Typography, Button } from "@material-ui/core";

const SortSection = ({ heading, button, flexDiv, setSortOrder }) => {
  return (
    <div className={flexDiv}>
      <Typography variant="h6" className={heading}>
        Sort by score
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        className={button}
        onClick={(e) => setSortOrder(e.target.innerText)}
      >
        ASC
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={button}
        onClick={(e) => setSortOrder(e.target.innerText)}
      >
        DESC
      </Button>
    </div>
  );
};

export default SortSection;

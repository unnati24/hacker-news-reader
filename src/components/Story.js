import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { mapTime } from "../utilities/mapTime";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "15px",
    margin: "8px",
    background: "#31353b",
    borderRadius: "10px",
  },
  links: {
    color: "#b9e3c6",
    fontSize: "25px",
    fontFamily: "Acme, sans-serif",
    fontStyle: "italic",
    cursor: "pointer",
  },
  content: {
    color: "#acdbdf",
    letterSpacing: "2px",
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Acme, sans-serif",
    fontSize: "16px",
  },
}));

const Story = ({ story }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <a
        href={story.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Typography variant="h4" className={classes.links} gutterBottom>
          {story.title}
        </Typography>
      </a>
      <div className={classes.content}>
        <p>
          Author: <span>{story.by}</span>
        </p>
        <p>
          Posted: <span>{mapTime(story.time)}</span>
        </p>
      </div>
      <div className={classes.content}>
        <p>
          Score: <span>{story.score}</span>
        </p>
        <p>
          Total comments: <span>{story.descendants}</span>
        </p>
      </div>
    </div>
  );
};

export default Story;

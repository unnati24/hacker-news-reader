import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import StoriesContent from "./StoriesContent";
import DrawerContent from "./DrawerContent";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    backgroundColor: "#393e46",
    padding: theme.spacing(3),
    minHeight: "760px",
  },
}));

function Content() {
  const classes = useStyles();
  const [value, setValue] = useState(null);
  const [sortOrder, setSortOrder] = useState("");
  const [active, setActive] = useState("best");

  return (
    <div className={classes.root}>
      <CssBaseline />
      <DrawerContent
        setValue={setValue}
        setSortOrder={setSortOrder}
        active={active}
        setActive={setActive}
      />
      <main className={classes.content}>
        <StoriesContent value={value} sortOrder={sortOrder} active={active} />
      </main>
    </div>
  );
}

export default Content;

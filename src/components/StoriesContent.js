import React, { useState, useEffect } from "react";
import { getStories } from "../services/hnApi";
import Story from "../components/Story";
import { getData } from "../utilities/localStorage";

const StoriesContent = ({ value, sortOrder, active }) => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getStories(active)
      .then(() => setStories(getData("stories")))
      .catch((err) => alert("Something went wrong! Try refreshing your page"));
  }, [active]);

  useEffect(() => {
    if (value) {
      const data = getData("stories").filter((story) =>
        story.title.toLowerCase().includes(value.toLowerCase())
      );
      setStories(data);
    } else return;
  }, [value]);

  useEffect(() => {
    if (sortOrder.length > 0) {
      const localData = getData("stories");
      sortOrder === "ASC"
        ? localData.sort(
            (a, b) => a["score"] && b["score"] && a["score"] - b["score"]
          )
        : localData.sort(
            (a, b) => a["score"] && b["score"] && b["score"] - a["score"]
          );
      setStories(localData);
    } else return;
  }, [sortOrder]);

  return stories.map((story) =>
    story && story.url ? <Story story={story} key={story.id} /> : null
  );
};

export default StoriesContent;

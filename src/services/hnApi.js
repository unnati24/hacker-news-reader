import axios from "axios";
import { setData, getData } from "../utilities/localStorage";
import { selectParams } from "../utilities/selectParams";

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const topStoriesUrl = `${baseUrl}topstories.json`;
export const bestStoriesUrl = `${baseUrl}beststories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = async (storyId) => {
  const story = await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({ data }) => data && selectParams(data));
  return story;
};

export const getStories = async (active) => {
  const url =
    active === "new"
      ? newStoriesUrl
      : active === "top"
      ? topStoriesUrl
      : active === "best"
      ? bestStoriesUrl
      : newStoriesUrl;

  await axios.get(url).then(({ data }) => {
    setData("data", data);
    const result = [];
    data.map((storyId) =>
      getStory(storyId).then(
        (res) => res && result.push(res) && setData("stories", result)
      )
    );
    return getData("stories");
  });
};

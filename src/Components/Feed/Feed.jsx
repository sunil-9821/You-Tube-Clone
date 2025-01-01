import React, { useContext, useEffect, useState } from "react";
import "./Feed.css";

import { Link } from "react-router-dom";
import { API_KEY, valueConverter } from "../../data";
import moment from "moment";
import { SearchContext } from "../../Context/searchContext";
const Feed = ({ category }) => {
  const [data, setData] = useState([]);
  const { searchResults } = useContext(SearchContext);

  if (searchResults.length > 0) {
    setData(searchResults);
  }

  const fetchData = async () => {
    const videoList_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_URL)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };
  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.map((item, i) => {
        return (
          <Link
            key={i}
            to={`video/${item.snippet.categoryId}/${item.id}`}
            className="card"
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {valueConverter(item.statistics.viewCount)} views &bull;{" "}
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;

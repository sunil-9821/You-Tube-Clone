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
    const videoList_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResult=500&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;
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
      <div className="searchResults">
        {dataQuery.length > 0
          ? dataQuery.map((item, i) => (
              <Link
                key={i}
                to={`/video/${item.id.videoId}`}
                className="videoLink"
              >
                <img
                  className="videoThumbnail"
                  src={item.snippet.thumbnails.medium.url}
                  alt={item.snippet.title}
                />
                <p className="videoTitle">{item.snippet.title}</p>
              </Link>
            ))
          : query && <p className="noResults">No results found.</p>}
      </div>
    </div>
  );
};

export default Feed;

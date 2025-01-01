import React, { useEffect, useState } from "react";
import "./Recommended.css";
import { API_KEY, valueConverter } from "../../data";
import { Link } from "react-router-dom";

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const relatedVideoUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`;
    try {
      const response = await fetch(relatedVideoUrl);
      const data = await response.json();
      if (data.items) {
        setApiData(data.items);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [categoryId]);

  return (
    <div className="recommended">
      {apiData.map((item, i) => (
        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={i} className="sideVideoList">
          <img
            src={item.snippet.thumbnails.medium.url}
            alt={item.snippet.title}
          />
          <div className="videoinfo">
            <h4>{item.snippet.title}</h4>
            <p>{item.snippet.channelTitle}</p>
            <p>{valueConverter(item.statistics.viewCount)} Views</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recommended;

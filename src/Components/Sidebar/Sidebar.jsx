import React from "react";
import "./Sidebar.css";
import {
  automobiles,
  blogs,
  cameron,
  entertainment,
  gameIcon,
  home,
  jack,
  megan,
  music,
  news,
  simon,
  sports,
  tech,
  tom,
} from "./SidebarIcons";
const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar === true ? "" : "smallSideBar"}`}>
      <div className="sortcutLinks">
        <div
          className={`sideLink ${category === 0 ? "active" : ""}`}
          onClick={() => setCategory(0)}
        >
          <img src={home} alt="" /> <p>Home</p>
        </div>
        <div
          className={`sideLink ${category === 20 ? "active" : ""}`}
          onClick={() => setCategory(20)}
        >
          <img src={gameIcon} alt="" /> <p>Gaming</p>
        </div>
        <div
          className={`sideLink ${category === 2 ? "active" : ""}`}
          onClick={() => setCategory(2)}
        >
          <img src={automobiles} alt="" /> <p>Automobiles</p>
        </div>
        <div
          className={`sideLink ${category === 17 ? "active" : ""}`}
          onClick={() => setCategory(17)}
        >
          <img src={sports} alt="" /> <p>Sports</p>
        </div>
        <div
          className={`sideLink ${category === 24 ? "active" : ""}`}
          onClick={() => setCategory(24)}
        >
          <img src={entertainment} alt="" /> <p>Entertainment</p>
        </div>
        <div
          className={`sideLink ${category === 28 ? "active" : ""}`}
          onClick={() => setCategory(28)}
        >
          <img src={tech} alt="" /> <p>Technology</p>
        </div>
        <div
          className={`sideLink ${category === 10 ? "active" : ""}`}
          onClick={() => setCategory(10)}
        >
          <img src={music} alt="" /> <p>Music</p>
        </div>
        <div
          className={`sideLink ${category === 22 ? "active" : ""}`}
          onClick={() => setCategory(22)}
        >
          <img src={blogs} alt="" /> <p>Blogs</p>
        </div>
        <div
          className={`sideLink ${category === 25 ? "active" : ""}`}
          onClick={() => setCategory(25)}
        >
          <img src={news} alt="" /> <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribeList">
        <h3>Subscribed</h3>
        <div className="sideLink">
          <img src={jack} alt="" />
          <p>PewDiePie</p>
        </div>
        <div className="sideLink">
          <img src={simon} alt="" />
          <p>MrBeast</p>
        </div>
        <div className="sideLink">
          <img src={tom} alt="" />
          <p>Justin Biber</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

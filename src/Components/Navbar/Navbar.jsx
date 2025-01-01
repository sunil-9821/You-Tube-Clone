import React, { useContext, useState } from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";
import { API_KEY } from "../../data";
import { SearchContext } from "../../Context/searchContext";
import {
  logo,
  menu,
  moreIcon,
  notificationIcon,
  profileIcon,
  searchIcon,
  uploadIcon,
} from "./NavbarIcons";

const Navbar = ({ setSidebar, sidebar }) => {
  const [query, setQuery] = useState("");
  const { setSearchResults } = useContext(SearchContext);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const searchQuery = async () => {
    if (!query.trim()) return;

    const searchDataUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${API_KEY}`;
    try {
      const response = await fetch(searchDataUrl);
      const data = await response.json();
      if (data.items) {
        setSearchResults(data.items);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <>
      <nav className="flexDiv">
        <div className="navLeft flexDiv">
          <img
            className="menuIcon"
            onClick={() => setSidebar(!sidebar)}
            src={menu}
            alt="Menu Icon"
          />
          <Link className="logoLink" to="/">
            <img className="logo" src={logo} alt="YouTube Logo" />
            <span>YouTube</span>
          </Link>
        </div>
        <div className="navMiddle flexDiv">
          <div className="searchBox flexDiv">
            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={handleChange}
            />
            <img
              // onClick={searchQuery}
              src={searchIcon}
              alt="Search Icon"
              className="searchButton"
            />
          </div>
        </div>
        <div className="navRight flexDiv">
          <img src={uploadIcon} alt="Upload Icon" />
          <img src={moreIcon} alt="More Options Icon" />
          <img src={notificationIcon} alt="Notification Icon" />
          <img className="userIcon" src={profileIcon} alt="User Profile Icon" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

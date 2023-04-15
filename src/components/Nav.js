import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import "./style/Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <p className="logo">
          <span>BLOG</span>posts
        </p>
        <p className="menu-icon">
          <AiOutlineMenu />
        </p>
        <div className="nav-search">
          <span><AiOutlineSearch /></span>
          <input type="search" placeholder="What are you looking for?" />
        </div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact us</a>
          <a href="#">Blogs</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

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
          <span>Home</span>
          <span>About</span>
          <span>Contact us</span>
          <span>Blogs</span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

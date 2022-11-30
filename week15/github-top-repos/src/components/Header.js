import React from "react";
import Navbar from "./Navbar";

function Header(props) {
  return (
    <header>
      <div className='jumbotron'>
        <h1>Popular Github Repositories</h1>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
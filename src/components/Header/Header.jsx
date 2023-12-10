import React from "react";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <div>
      <div>
        <h1>
          <span className="text-primary">Char</span>
          <span className="text-secondary-dark">C</span>
          <span className="text-primary">ha</span>
        </h1>
      </div>
      <SearchBar />
    </div>
  );
};

export default Header;

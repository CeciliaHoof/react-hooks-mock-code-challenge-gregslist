import React from "react";
import Search from "./Search";

function Header({listings, updateListings, searchQuery, setSearchQuery }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search listings={listings} updateListings={updateListings} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
    </header>
  );
}

export default Header;

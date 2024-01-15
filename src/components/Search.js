import React, {useState} from "react";

function Search({ listings, updateListings, searchQuery, setSearchQuery }) {
  

  function handleSubmit(e) {
    e.preventDefault();
    const searchedListing = listings.filter(listing => (
      listing.description.toLowerCase().includes(searchQuery)
    ))
   updateListings(searchedListing)
   
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;

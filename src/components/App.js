import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  
  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(resp => resp.json())
      .then(data => setListings(data))
  }, [searchQuery])

  return (
    <div className="app">
      <Header listings={listings}
        updateListings={setListings}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}/>
      <ListingsContainer listings={listings} updateListings={setListings}/>
    </div>
  );
}

export default App;

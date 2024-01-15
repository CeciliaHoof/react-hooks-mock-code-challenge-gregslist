import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, updateListings}) {

  return (
    <main>
      <ul className="cards">
        {listings.map(listing => (
          <ListingCard
            key={listing.id}
            listing={listing}
            listings={listings}
            updateListings={updateListings}/>))}
      </ul>
    </main>
  );
}

export default ListingsContainer;

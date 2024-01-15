import React, { useState } from "react";

function ListingCard({ listing, listings, updateListings }) {
  const [isFavorite, setIsFavorite] = useState(false)

  function toggleFavorite(){
    setIsFavorite(!isFavorite)
  }

  function deleteListing(){
    const deletedListing = listing;
    const deletedId = listing.id;
    const updatedListings = listings.filter((listing) => listing !== deletedListing)
    updateListings(updatedListings)

    fetch(`http://localhost:6001/listings/${deletedId}`,{
      method:"DELETE"
    })
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active"
            onClick={toggleFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite"
          onClick={toggleFavorite}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={deleteListing}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

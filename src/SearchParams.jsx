import React from "react";

function SearchParams() {
  const location = "Seatle, WA";
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input id="location" value={location} placehomder="location" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchParams;

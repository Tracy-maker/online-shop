import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ isSearchOpen, searchQuery, setSearchQuery }) => {
  if (!isSearchOpen) return null;

  return (
    <div className="bg-gray-100 shadow-md py-4 px-4 fixed top-16 left-0 w-full z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center bg-white rounded-lg border border-gray-300 shadow-sm space-y-2 md:space-y-0">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-3 py-2 w-full text-sm bg-transparent focus:outline-none text-gray-700 md:w-auto md:flex-grow border-b md:border-0 md:rounded-l-lg"
        />
        <button className="bg-gray-800 text-white px-4 py-2 rounded-lg md:rounded-r-lg hover:bg-gray-900 transition w-full md:w-auto">
          Search
        </button>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  isSearchOpen: PropTypes.bool.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

export default SearchBar;

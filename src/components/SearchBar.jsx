import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
  return (
    <div className="w-full max-w-2xl mx-auto px-2">
      <input
        type="text"
        placeholder="Search by Title or Description"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="
          border border-gray-300 
          bg-white text-gray-900
          p-2 rounded w-full
          focus:outline-none focus:ring-2 focus:ring-blue-500
          transition
          dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600
          dark:placeholder-gray-400
          dark:focus:ring-blue-400
        "
      />
    </div>
  );
};

export default SearchBar;

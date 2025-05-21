import React from 'react';

const FilterBar = ({ setFilterStatus }) => {
  return (
    <div className="w-full max-w-2xl mx-auto px-2">
      <select
        onChange={(e) => setFilterStatus(e.target.value)}
        className="
          border border-gray-300 
          bg-white text-gray-900
          p-2 rounded w-full
          focus:outline-none focus:ring-2 focus:ring-blue-500
          transition
          dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600
          dark:focus:ring-blue-400
        "
      >
        <option value="All">All</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
};

export default FilterBar;

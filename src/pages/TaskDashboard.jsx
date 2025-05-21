import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/taskSlice.js";
import TaskCard from "../components/TaskCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import { ClipLoader } from "react-spinners";

const TaskDashboard = () => {
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector((state) => state.tasks);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-12 mb-12">
        <ClipLoader color="#3B82F6" size={50} />
      </div>
    );
  }

  const filteredTasks = tasks
    .filter(
      (task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((task) => filterStatus === "All" || task.status === filterStatus);

  const groupedTasks = {
    "To Do": [],
    "In Progress": [],
    Done: [],
  };

  filteredTasks.forEach((task) => {
    groupedTasks[task.status].push(task);
  });

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Search Filtration */}
      <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
        <SearchBar setSearchTerm={setSearchTerm} />
        <FilterBar setFilterStatus={setFilterStatus} />
      </div>

      {/* Task Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Object.keys(groupedTasks).map((status) => (
          <div
            key={status}
            className="bg-white dark:bg-gray-800 rounded shadow p-4 border border-gray-200 dark:border-gray-700"
          >
            <h2 className="font-bold text-xl mb-4 text-center md:text-left text-gray-900 dark:text-gray-100">
              {status}
            </h2>
            {groupedTasks[status].length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400 text-center md:text-left">
                No tasks.
              </p>
            ) : (
              <div className="space-y-4">
                {groupedTasks[status].map((task) => (
                  <TaskCard key={task._id} task={task} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskDashboard;

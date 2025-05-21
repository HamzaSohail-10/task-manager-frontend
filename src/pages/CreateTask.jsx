import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../redux/taskSlice";
import { toast } from "react-toastify";

const CreateTask = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    deadline: "",
    status: "To Do",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.title.trim()) {
      setError("Title is required.");
      return false;
    }
    if (formData.title.length > 100) {
      setError("Title should not exceed 100 characters.");
      return false;
    }
    if (formData.description.length > 500) {
      setError("Description should not exceed 500 characters.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await dispatch(createTask(formData)).unwrap();
      toast.success("Task Created Successfully!");
      setFormData({
        title: "",
        description: "",
        deadline: "",
        status: "To Do",
      });
      setError("");
    } catch (err) {
      console.error("Failed to create task:", err);

      toast.error(err || 'Failed to update task.');
    }
  };

  return (
    <div className="max-w-2xl w-full mx-auto mt-10 px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow p-5">
        <h2 className="text-2xl font-bold mb-5 text-center sm:text-left text-gray-900 dark:text-gray-100">
          Create a New Task
        </h2>
        {error && <p className="text-red-500 mb-3">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              Title:
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              maxLength={100}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              Description:
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              maxLength={500}
              rows={3}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              Deadline (optional):
            </label>
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              Status:
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded transition"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;

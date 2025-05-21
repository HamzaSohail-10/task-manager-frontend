import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../redux/taskSlice';
import ConfirmationModal from './ConfirmationModal';
import { toast } from 'react-toastify';

const EditTaskModal = ({ task, onClose, onSave }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [deadline, setDeadline] = useState(task.deadline || '');
  const [status, setStatus] = useState(task.status);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...task, title, description, deadline, status });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 px-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-lg dark:shadow-gray-700">
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Edit Task</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={100}
            required
          />
          <textarea
            className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={500}
            rows={3}
          />
          <input
            type="date"
            className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
          <select
            className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <div className="flex flex-wrap justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 transition text-gray-900 dark:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const TaskCard = ({ task }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await dispatch(deleteTask(task._id)).unwrap();
      toast.success('Task deleted successfully.');
    } catch (error) {
      toast.error('Failed to delete task.');
    } finally {
      setShowDeleteModal(false);
    }
  };

  const handleUpdate = async (updatedTask) => {
    try {
      await dispatch(updateTask(updatedTask)).unwrap();
      toast.success('Task updated successfully.');
      setShowEditModal(false);
    } catch (err) {
      console.error('Failed to update task:', err);

      toast.error(err || 'Failed to update task.');
    }
  };

  const isOverdue = task.deadline && task.status !== "Done" && new Date(task.deadline) < new Date().setHours(0, 0, 0, 0);

  return (
    <div className="relative border rounded-lg bg-white dark:bg-gray-800 p-4 shadow hover:shadow-lg transition duration-300 w-full max-w-md mx-auto dark:shadow-gray-700">
      {isOverdue && (
        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow dark:bg-red-500">
          Overdue
        </div>
      )}

      <h3 className="font-semibold text-xl mb-2 text-gray-800 dark:text-gray-100">{task.title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-2 break-words">{task.description}</p>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">
        <strong>Deadline:</strong> {task.deadline || 'N/A'}
      </p>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
        <strong>Status:</strong> {task.status}
      </p>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setShowEditModal(true)}
          className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white transition"
        >
          Edit
        </button>
        <button
          onClick={() => setShowDeleteModal(true)}
          className="px-3 py-1 rounded bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white transition"
        >
          Delete
        </button>
      </div>

      {showDeleteModal && (
        <ConfirmationModal
          message={`Are you sure you want to delete "${task.title}"?`}
          onConfirm={handleDelete}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}

      {showEditModal && (
        <EditTaskModal
          task={task}
          onClose={() => setShowEditModal(false)}
          onSave={handleUpdate}
        />
      )}
    </div>
  );
};

export default TaskCard;

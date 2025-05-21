import React from 'react';

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
      <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg w-[90%] sm:w-96 shadow-xl dark:shadow-gray-700">
        <p className="mb-6 text-lg text-gray-800 dark:text-gray-100">{message}</p>
        <div className="flex flex-col sm:flex-row justify-end sm:space-x-4 space-y-3 sm:space-y-0">
          <button
            onClick={onCancel}
            className="bg-gray-300 hover:bg-gray-400 text-gray-900 px-4 py-2 rounded transition dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition dark:bg-red-700 dark:hover:bg-red-800"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;

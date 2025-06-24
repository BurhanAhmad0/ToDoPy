import React from 'react'

const AddEventModal = ({ handleEventInputChange, addTask, setAddEvent }) => {
    return (
        <div className="add-task-modal fixed inset-0 flex items-center justify-center bg-black/60 bg-opacity-50 z-50">
            <div className="bg-white dark:bg-green-900 text-black dark:text-white p-6 rounded-lg shadow-lg w-96">
                <h3 className="text-xl font-semibold mb-4">Add New Event</h3>

                <form>
                    <input
                        onChange={(e) => handleEventInputChange(e)}
                        required
                        name="task"
                        type="text"
                        placeholder="Event Title"
                        className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-green-800 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-300 focus:ring-2 focus:ring-green-400 outline-none transition-all"
                    />

                    <input
                        onChange={(e) => handleEventInputChange(e)}
                        required
                        name="date"
                        type="datetime-local"
                        className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-green-800 text-black dark:text-white focus:ring-2 focus:ring-green-400 outline-none transition-all"
                    />

                    <button
                        onClick={(e) => addTask(e)}
                        className="cursor-pointer bg-btn dark:bg-green-700 w-full py-2 rounded-lg text-white hover:bg-btn/80 dark:hover:bg-green-600 transition-all duration-300"
                    >
                        Save Event
                    </button>
                </form>

                <button
                    onClick={() => setAddEvent(false)}
                    className="mt-4 text-red-600 dark:text-red-400 hover:underline transition-all duration-200 cursor-pointer"
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default AddEventModal

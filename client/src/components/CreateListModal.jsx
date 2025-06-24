import React from 'react'

const CreateListModal = ({ createList, handleListTitleChange, setCreateListModal }) => {
    return (
        <article className="fixed top-0 left-0 w-full h-full bg-black/60 z-50 flex justify-center items-center px-4">
            <div className="bg-white dark:bg-green-900 text-black dark:text-white rounded-xl p-6 w-full max-w-md shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Create New List</h2>

                <div className="space-y-4">
                    {/* List Name Input */}
                    <input
                        onChange={(e) => handleListTitleChange(e)}
                        type="text"
                        name="ListTitle"
                        required
                        placeholder="List Name"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-green-800 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                    />

                    {/* Color Selector */}
                    <div>
                        <label htmlFor="color" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                            Select a Color
                        </label>
                        <select
                            onChange={(e) => handleListTitleChange(e)}
                            name="color"
                            id="color"
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-green-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                        >
                            <option value="bg-red-400">Red</option>
                            <option value="bg-green-400">Green</option>
                            <option value="bg-blue-400">Blue</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        onClick={createList}
                        className="cursor-pointer w-full bg-btn dark:bg-green-700 hover:bg-btn/75 dark:hover:bg-green-600 font-semibold py-2 rounded-lg transition-all duration-300 text-white"
                    >
                        Create List
                    </button>

                    <button
                        onClick={() => setCreateListModal(false)}
                        className="text-red-600 dark:text-red-400 hover:underline transition duration-200 cursor-pointer"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </article>
    )
}

export default CreateListModal

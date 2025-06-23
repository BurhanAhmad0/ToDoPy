import React from 'react'

const AddEventModal = ({handleEventInputChange, addTask, setAddEvent}) => {
    return (
        <div className="add-task-modal fixed inset-0 flex items-center justify-center bg-black/60 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h3 className="text-xl font-semibold mb-4">Add New Event</h3>
                <form>
                    <input onChange={(e) => handleEventInputChange(e)} required name='task' type="text" placeholder="Event Title" className="w-full p-2 mb-4 border rounded" />
                    <input onChange={(e) => handleEventInputChange(e)} required name='date' type="datetime-local" className="w-full p-2 mb-4 border rounded" />
                    <button onClick={(e) => addTask(e)} className="cursor-pointer bg-btn w-full py-2 rounded-lg hover:bg-btn/80 transition-all duration-300">Save Event</button>
                </form>
                <button onClick={() => setAddEvent(false)} className="mt-4 text-red-500 cursor-pointer">Cancel</button>
            </div>
        </div>
    )
}

export default AddEventModal

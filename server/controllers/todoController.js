import TodoModel from "../models/todoModel.js";

const addTodo = async (req, res) => {
    try {
        const { title, completed } = req.body;
        if (!title) {
            return res.status(400).json({ message: 'Title is required' });
        }

        // Here you would typically save the todo to a database
        const newTodo = new TodoModel({
            title,
            completed: completed || false, // Default to false if not provided
            userId: req.user.userId // Assuming user is set in the request by authentication middleware
        });
        await newTodo.save(); // This line is a placeholder for actual database save operation

        // For now, we will just return a success message
        res.status(201).json({ success: true, message: 'Todo added successfully' });
    } catch (error) {
        console.error('Error adding todo:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title } = req.body;

        const updatedFields = {};
        if (title !== undefined) updatedFields.title = title;

        const todo = await TodoModel.findByIdAndUpdate(id, updatedFields, { new: true });

        if (!todo) {
            return res.status(404).json({ error: 'Todo item not found.' });
        }

        return res.status(200).json({
            message: 'Todo item updated successfully.',
            todo,
        });
    } catch (error) {
        console.error(`Error updating todo item with id ${req.params.id}:`, error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
};

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;

        const todo = await TodoModel.findByIdAndDelete(id);

        if (!todo) {
            return res.status(404).json({ error: 'Todo item not found.' });
        }

        return res.status(200).json({ message: 'Todo item deleted successfully.', id });
    } catch (error) {
        console.error(`Error deleting todo item with id ${req.params.id}:`, error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
};

const updateTodoStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { completed } = req.body;

        const todo = await TodoModel.findByIdAndUpdate(
            id,
            { completed },
            { new: true, runValidators: true } // ensure validation runs
        );

        if (!todo) {
            return res.status(404).json({ error: 'Todo item not found.' });
        }

        return res.status(200).json({
            message: 'Todo item status updated successfully.',
            todo,
        });
    } catch (error) {
        console.error(`Error updating todo status with id ${req.params.id}:`, error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
};

const getTodos = async (req, res) => {
    try {
        const userId = req.user.userId; // Assuming user is set in the request by authentication middleware

        // Here you would typically fetch todos from a database
        const todos = await TodoModel.find({ userId }).sort({ createdAt: -1 }).select('-userId'); // This line is a placeholder for actual database fetch operation

        // For now, we will just return an empty array
        res.status(200).json({ success: true, todos });
    } catch (error) {
        console.error('Error fetching todos:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' })

    }
}

export { addTodo, getTodos, updateTodo, deleteTodo, updateTodoStatus };

import UserModel from '../models/userModel.js'

const addList = async (req, res) => {
    try {
        const { title, color, todo } = req.body;

        // Validate input
        if (!title || !color) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const userId = req.user.userId; // Assuming user ID is available in req.user
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Create a new list
        const newList = {
            title,
            color,
            todos: todo || [], // If todo is not provided, initialize as an empty array
            createdAt: Date.now()
        };

        user.lists.push(newList);
        await user.save();

        res.status(201).json({ success: true, message: 'List added successfully' });
    } catch (error) {
        console.error('Error adding list:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const getLists = async (req, res) => {
    try {
        const userId = req.user.userId; // Assuming user ID is available in req.user
        const user = await UserModel.findById(userId).select('lists');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ success: true, lists: user.lists });
    } catch (error) {
        console.error('Error fetching lists:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const getListById = async (req, res) => {
    try {

        const userId = req.user.userId;
        const { id } = req.params;

        const user = await UserModel.findById(userId).select('lists');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const list = user.lists.find((list) => {
            return list._id.toString() === id;
        });

        if (!list) {
            return res.status(404).json({ message: 'List not found', id });
        }

        res.status(200).json({ success: true, list });

    } catch (error) {
        console.log(error)
        res.json(error)
    }
}

export { addList, getLists, getListById };

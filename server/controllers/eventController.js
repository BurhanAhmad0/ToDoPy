import EventModel from "../models/eventModel.js";

const addEvent = async (req, res) => {
    try {
        const { title, start, end } = req.body;
        if (!title) {
            return res.status(400).json({ message: 'Title is required' });
        }

        // Here you would typically save the todo to a database
        const newEvent = new EventModel({
            title,
            start,
            end,
            userId: req.user.userId // Assuming user is set in the request by authentication middleware
        });
        await newEvent.save(); // This line is a placeholder for actual database save operation

        // For now, we will just return a success message
        res.status(201).json({ success: true, message: 'Event added successfully' });
    } catch (error) {
        console.error('Error adding event:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}

const getEvents = async (req, res) => {
    try {
        // Use the correct key depending on your JWT
        const userId = req.user.userId || req.user._id;

        if (!userId) {
            return res.status(401).json({ success: false, message: 'Unauthorized' });
        }

        const events = await EventModel.find({ userId })
            .sort({ createdAt: -1 })
            .select('-userId');

        res.status(200).json({ success: true, events });

    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

export { addEvent, getEvents };

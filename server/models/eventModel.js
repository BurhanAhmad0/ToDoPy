import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, {
    timestamps: true,
});

const Event = mongoose.model("Event", EventSchema);
export default Event;

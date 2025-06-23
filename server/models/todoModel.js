import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, {
    timestamps: true,
});

const Todo = mongoose.model("Todo", TodoSchema);
export default Todo;

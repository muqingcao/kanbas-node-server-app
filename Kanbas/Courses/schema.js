import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    number: { type: String, required: true, unique: true },
    name: String,
    startDate: Date,
    endDate: Date,
    department: String,
    credits: Number,
    description: String,
    image: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel",
    },

},
    { collection: "courses" }
);
export default courseSchema;
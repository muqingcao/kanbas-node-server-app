import mongoose from "mongoose";
const enrollmentSchema = new mongoose.Schema(
    {
        course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "CourseModel",
        },
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserModel",
        },
        grade: Number,
    },
    { collection: "enrollments" }
);
export default enrollmentSchema;
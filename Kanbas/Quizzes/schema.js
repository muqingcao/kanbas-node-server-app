import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    number: String,
    title: String,
    description: String,
    quiz_type: String,
    points: String,
    assignment_group: String,
    shuffle_answers: { type: String, enum: ["Yes", "No"] }, 
    time_limit: { type: String, enum: ["Yes", "No"] },
    how_long: String,
    multiple_attempts: { type: String, enum: ["Yes", "No"] },
    show_correct_answers: String,
    access_code: { type: String, enum: ["Yes", "No"] }, 
    access_code_number: String,
    one_question_at_a_time: { type: String, enum: ["Yes", "No"] },
    webcam_required: { type: String, enum: ["Yes", "No"] },
    lock_questions_after_answering: { type: String, enum: ["Yes", "No"] },
    due_date: String,
    available_date: String,
    until_date: String,
    questions: [String],
    course: String,
    published: { type: String, enum: ["Published", "Unpublished"] }, 
},
    { collection: "quizzes" }
);
export default quizSchema;
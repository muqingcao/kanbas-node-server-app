import model from "./model.js";

// Fetch all quizzes for a course
export const findAllQuizzesForCourse = (cid) => {
    return model.find({ course: cid });
}

// Fetch details of a quiz
export const findQuizById = (qid) => {
    return model.findById(qid);
}

// Create a quiz
export const createQuiz = (quiz) => {
    delete quiz._id;
    return model.create(quiz);
}

// Update a quiz
export const updateQuiz = (qid, newQuiz) => {
    return model.replaceOne({ _id: qid }, newQuiz);
}

// Delete a quiz
export const deleteQuiz = (qid) => {
    return model.deleteOne({ _id: qid });
}
    



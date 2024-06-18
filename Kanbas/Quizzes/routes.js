import Database from "../Database/index.js";

export default function QuizRoutes(app) {
    app.get("/api/courses/:cid/quizzes", (req, res) => {
        const { cid } = req.params;
        const quizzes = Database.quizzes.filter((q) => q.course === cid);
        res.json(quizzes);
    });

    app.get("/api/courses/:cid/quizzes/:qid", (req, res) => {
        const { cid, qid } = req.params;
        const quiz = Database.quizzes.find((q) => q.course === cid && q._id === qid);
        if (quiz) {
            res.json(quiz);
        } else {
            res.status(404).json({ error: "Quiz not found" });
        }
    });
}
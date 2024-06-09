import db from "../Database/index.js";

export default function AssignmentRoutes(app) {
    // Update an Assignment
    app.put("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        const assignmentIndex = db.assignments.findIndex(
            (a) => a._id === aid);
        db.assignments[assignmentIndex] = {
            ...db.assignments[assignmentIndex],
            ...req.body
        };
        res.sendStatus(204);
    });

    // Deleting an Assignment
    app.delete("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        db.assignments = db.assignments.filter((a) => a._id !== aid);
        res.sendStatus(200);
    });

    // Creating Assignments for a Course
    app.post("/api/courses/:cName/assignments", (req, res) => {
        const newAssignment = {
            ...req.body,
        };
        db.assignments.push(newAssignment);
        res.send(newAssignment);
    });

    // Retrieving Assignments for Course
    app.get("/api/courses/:cName/assignments", (req, res) => {
        const { cName } = req.params;
        const assignments = db.assignments.filter((m) => m.course === cName);
        res.json(assignments);
    });
}
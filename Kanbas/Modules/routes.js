import db from "../Database/index.js";

export default function ModuleRoutes(app) {
    // Update a Module
    app.put("/api/modules/:mid", (req, res) => {
        const { mid } = req.params;
        const moduleIndex = db.modules.findIndex(
            (m) => m._id === mid);
        db.modules[moduleIndex] = {
            ...db.modules[moduleIndex],
            ...req.body
        };
        res.sendStatus(204);
    });

    // Deleting a Module
    app.delete("/api/modules/:mid", (req, res) => {
        const { mid } = req.params;
        db.modules = db.modules.filter((m) => m._id !== mid);
        res.sendStatus(200);
    });

    // Creating Modules for a Course
    app.post("/api/courses/:cid/modules", (req, res) => {
        const { cid } = req.params;
        const newModule = {
            ...req.body,
            course: cid,
            _id: new Date().getTime().toString(),
        };
        db.modules.push(newModule);
        res.send(newModule);
    });

    // Retrieving Modules for Course
    app.get("/api/courses/:cid/modules", (req, res) => {
        const { cid } = req.params;
        const modules = db.modules.filter((m) => m.course === cid);
        res.json(modules);
    });
}


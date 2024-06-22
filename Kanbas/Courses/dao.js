import CourseModel from "./model.js";

export const createCourse = async (course) => {
    try {
        console.log("Creating course with data:", course);
        delete course._id;
        const newCourse = await CourseModel.create(course);
        return newCourse;
    } catch (error) {
        console.error("Error in createCourse DAO method:", error);
        throw error;
    }
}

export const findAllCourses = () =>
    CourseModel.find();

export const updateCourse = (courseId, course) =>
    CourseModel.updateOne({ _id: courseId }, { $set: course });

export const deleteCourse = (courseId) =>
    CourseModel.deleteOne({ _id: courseId });

export const findCoursesByAuthor = (author) => {
    return CourseModel.find({ author });
}
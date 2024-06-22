import enrollmentModel from "./model.js";

// Retrieve all the enrollments
export function findAllEnrollments() {
  return enrollmentModel.find();
}

// create an enrollment by id of a student and id of a course
export function createEnrollment(enrollment) {
  return enrollmentModel.create(enrollment);
}

// delete an enrollment
export function unenrollStudentFromCourse(student, course) {
  return enrollmentModel.deleteOne({ student, course });
}

// fetch all the courses this student enrolled in, "populate" replacing the course id by the object
export function findEnrollmentsByStudent(student) {
  return enrollmentModel.find({ student }).populate("course");
}

// fetch all students enrolled in the course, "populate" replacing the student if by the object
export function findEnrollmentsByCourse(course) {
  return enrollmentModel.find({ course }).populate("student");
}
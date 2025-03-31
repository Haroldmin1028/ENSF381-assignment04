import React, { useState, useEffect } from "react";
import EnrolledCourse from "./EnrolledCourse.js";

const EnrollmentList = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const savedCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    setEnrolledCourses(savedCourses);
  }, []);

  useEffect(() => {
    localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  const dropCourse = (courseToDrop) => {
    setEnrolledCourses(enrolledCourses.filter((course) => course.id !== courseToDrop.id));
  };

  const totalCreditHours = enrolledCourses.reduce((sum, course) => sum + course.creditHours, 0);

  return (
    <div className="enrollment-list">
      <h2>Enrolled Courses</h2>
      {enrolledCourses.map((course) => (
        <EnrolledCourse key={course.id} course={course} dropCourse={dropCourse} />
      ))}
      <p>Total Credit Hours: {totalCreditHours}</p>
    </div>
  );
};

export default EnrollmentList;
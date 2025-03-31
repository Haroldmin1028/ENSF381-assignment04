import React, { useState, useEffect } from "react";
import EnrolledCourse from "./EnrolledCourse.js";

const EnrollmentList = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const savedCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    setEnrolledCourses(savedCourses);
  }, []);

  const dropCourse = (courseToDrop) => {
    const updatedCourses = enrolledCourses.filter((course) => course.id !== courseToDrop.id);
    setEnrolledCourses(updatedCourses);
    localStorage.setItem('enrolledCourses', JSON.stringify(updatedCourses));
  };

  const getDurationFromWeeks = (durationString) => {
    const match = durationString.match(/(\d+)\s*week(s?)/);
    return (match ? parseInt(match[1],10) : 0) * 5;
  };


  const totalCreditHours = enrolledCourses.reduce((sum, course) => sum + getDurationFromWeeks(course.duration), 0);

  return (
    <div className="enrollment-list">
      <h2>Enrolled Courses</h2>
      <div className="enrolled-courses-container">
      {enrolledCourses.map((course) => (
        <EnrolledCourse key={course.id} course={course} dropCourse={dropCourse} />
      ))}
      </div>
      <p>Total Credit Hours: {totalCreditHours}</p>
    </div>
  );
};

export default EnrollmentList;
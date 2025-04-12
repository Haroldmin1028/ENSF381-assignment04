import React, { useState, useEffect } from "react";
import EnrolledCourse from "./EnrolledCourse.js";

const EnrollmentList = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const student_id = localStorage.getItem('student_id');

    fetch(`http://localhost:5000/student_courses/${student_id}`)
      .then((res) => res.json())
      .then((data) => {
      setEnrolledCourses(data.courses);
      });
  }, []);

  const dropCourse = (courseId) => {
    const student_id = localStorage.getItem('student_id');

    fetch(`http://localhost:5000/drop/${student_id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ course_to_delete: courseId }),
  })
  .then((res) => res.json())
  .then((data) => {
    if (data.success) {
      // remove course from local state
      setEnrolledCourses((prev) => prev.filter((c) => c.id !== courseId));
    }
  });
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
import React from "react";

const EnrolledCourse = ({ course, dropCourse }) => {
  return (
    <div className="enrolled-course">
      <h4>{course.name}</h4>
      <p>Credit Hours: {course.creditHours}</p>
      <button onClick={() => dropCourse(course)}>Drop Course</button>
    </div>
  );
};

export default EnrolledCourse;
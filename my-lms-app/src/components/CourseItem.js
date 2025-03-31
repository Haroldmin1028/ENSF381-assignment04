import React, { useState } from "react";

const CourseItem = ({ course, enroll }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div
      className="course-item"
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      <img src={course.image} alt={course.name} className="course-image" />
      <h3>{course.name}</h3>
      <p>Instructor: {course.instructor}</p>
      {showDescription && <p className="course-description">{course.description}</p>}
      <button onClick={() => enroll(course)}>Enroll Now</button>
    </div>
  );
};

export default CourseItem;
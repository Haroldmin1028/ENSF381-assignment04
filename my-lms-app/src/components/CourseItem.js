import React, { useState } from "react";

const CourseItem = ({ course, enroll, isEnrolled }) => {
    const [showDescription, setShowDescription] = useState(false);
    
    console.log("Rendering course:", course);
    if (!course) return null;

  return (
    <div
      className="course-item"
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      <img src={require(`../images/${course.image}`)} alt={course.name}/>
      <h3>{course.name}</h3>
      <p>Instructor: {course.instructor}</p>
      {showDescription && <p className="course-description">{course.description}</p>}
      <button onClick={() => enroll(course)} disabled={isEnrolled}>{isEnrolled ? "Enrolled" : "Enroll Now"}</button>
    </div>
  );
};

export default CourseItem;
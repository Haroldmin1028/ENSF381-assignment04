import React, { useState, useEffect} from "react";
import CourseItem from "./CourseItem";
import courses from "./../data/courses.js";


const CourseCatalog = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
      const savedCourses = JSON.parse(localStorage.getItem("enrolledCourses"));
      if (savedCourses) {
        setEnrolledCourses(savedCourses);
      }
    }, []);

  const enroll = (course) => {
    const isCourseEnrolled = enrolledCourses.some((enrolledCourse) => enrolledCourse.id === course.id);
    if (!isCourseEnrolled) {
        const updatedCourses = [...enrolledCourses, course];
        setEnrolledCourses(updatedCourses);
        localStorage.setItem('enrolledCourses', JSON.stringify(updatedCourses));
    }
  };

  return (
    <div className="course-catalog">
      <h2>Available Courses</h2>
      <table className="course-table">
      <tr>
            <td width = "33%">
                <CourseItem course={courses[0]} enroll={enroll} />
            </td>
            <td width = "33%">
                <CourseItem course={courses[1]} enroll={enroll} />
            </td>
            <td width = "33%">
                <CourseItem course={courses[2]} enroll={enroll} />
            </td>
        </tr>
        <tr>
            <td width = "33%">
                <CourseItem course={courses[3]} enroll={enroll} />
            </td>
            <td width = "33%">
                <CourseItem course={courses[4]} enroll={enroll} />
            </td>
            <td width = "33%">
                <CourseItem course={courses[5]} enroll={enroll} />
            </td>
        </tr>
        <tr>
            <td width = "33%">
                <CourseItem course={courses[6]} enroll={enroll} />
            </td>
            <td width = "33%">
                <CourseItem course={courses[7]} enroll={enroll} />
            </td>
            <td width = "33%">
                <CourseItem course={courses[8]} enroll={enroll} />
            </td>
        </tr>
        <tr>
            <td width = "33%">
                <CourseItem course={courses[9]} enroll={enroll} />
            </td>
            <td width = "33%">
            </td>
            <td width = "33%">
            </td>
        </tr>
      </table>
    </div>
  );
}


export default CourseCatalog;
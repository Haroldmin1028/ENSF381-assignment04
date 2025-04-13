import React, { useState, useEffect} from "react";
import CourseItem from "./CourseItem";



const CourseCatalog = () => {
    const [courses, setCourses] = useState([]);
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/courses")
        .then((res) => res.json())
        .then((data) => {
          setCourses(data);
        })
        .catch((err) => console.error("Error fetching courses:", err));
    }, []);

  const enroll = (course) => {
    const student_id = localStorage.getItem('student_id');

  fetch(`http://localhost:5000/enroll/${student_id}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ new_course: course }),
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      alert(data.message)
    } else{
        alert(data.message)
    }
  });
};

  return (
    <div className="course-catalog">
      <h2>Available Courses</h2>
      <table className="course-table">
      {courses.length > 0 && (<><tr>
        
            <td width = "33%">
                <CourseItem course={courses[0]} enroll={enroll} isEnrolled={courses.some((enrolledCourse)=>enrolledCourse.id === courses[0].id)}/>
            </td>
            <td width = "33%">
                <CourseItem course={courses[1]} enroll={enroll} isEnrolled={courses.some((enrolledCourse)=>enrolledCourse.id === courses[1].id)}/>
            </td>
            <td width = "33%">
                <CourseItem course={courses[2]} enroll={enroll} isEnrolled={courses.some((enrolledCourse)=>enrolledCourse.id === courses[2].id)}/>
            </td>
        </tr>
        <tr>
            <td width = "33%">
                <CourseItem course={courses[3]} enroll={enroll} isEnrolled={enrolledCourses.some((enrolledCourse)=>enrolledCourse.id === courses[3].id)}/>
            </td>
            <td width = "33%">
                <CourseItem course={courses[4]} enroll={enroll} isEnrolled={enrolledCourses.some((enrolledCourse)=>enrolledCourse.id === courses[4].id)}/>
            </td>
            <td width = "33%">
                <CourseItem course={courses[5]} enroll={enroll} isEnrolled={enrolledCourses.some((enrolledCourse)=>enrolledCourse.id === courses[5].id)}/>
            </td>
        </tr>
        <tr>
            <td width = "33%">
                <CourseItem course={courses[6]} enroll={enroll} isEnrolled={enrolledCourses.some((enrolledCourse)=>enrolledCourse.id === courses[6].id)}/>
            </td>
            <td width = "33%">
                <CourseItem course={courses[7]} enroll={enroll} isEnrolled={enrolledCourses.some((enrolledCourse)=>enrolledCourse.id === courses[7].id)}/>
            </td>
            <td width = "33%">
                <CourseItem course={courses[8]} enroll={enroll} isEnrolled={enrolledCourses.some((enrolledCourse)=>enrolledCourse.id === courses[8].id)}/>
            </td>
        </tr>
        <tr>
            <td width = "33%">
                <CourseItem course={courses[9]} enroll={enroll} isEnrolled={enrolledCourses.some((enrolledCourse)=>enrolledCourse.id === courses[9].id)}/>
            </td>
            <td width = "33%">
            </td>
            <td width = "33%">
            </td>
        </tr></>)}
      </table>
    </div>
  );
}


export default CourseCatalog;
import React from "react";

const EnrolledCourse = ({ course, dropCourse }) => {

    const getDurationFromWeeks = (durationString) => {
        const match = durationString.match(/(\d+)\s*weeks/);
        return (match ? parseInt(match[1], 10) : 0) * 5;
    };

    return (
        <div className="enrolled-course">
        <h4>{course.name}</h4>
        <p>Credit Hours: {getDurationFromWeeks(course.duration)}</p>
        <button onClick={() => dropCourse(course)}>Drop Course</button>
        </div>
    );
};

export default EnrolledCourse;
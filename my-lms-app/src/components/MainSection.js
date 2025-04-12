import React, {useState, useEffect} from 'react';

export default function MainSection() {
    const courses = require('../backend/courses.json'); 

    var courseList = [];
    while (courseList.length < 3) {
        const index = Math.floor(Math.random() * 10);
        if (!courseList.includes(index)) {
            courseList.push(index);
        }
    }
    var firstCourse = courses[courseList[0]];
    var secondCourse = courses[courseList[1]];
    var thirdCourse = courses[courseList[2]];

    const [testimonials, setTestimonials] = useState([]);
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        async function fetchTestimonials() {
            const backend = 'http://127.0.0.1:5000/testimonials';
            try {
                const response = await fetch(backend, {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'}
                });
                const data = await response.json();

                let rating1 = "☆☆☆☆☆";
                switch (data.get("testimonial1").rating) {
                    case 1:
                        rating1 = "★☆☆☆☆";
                        break;
                    case 2:
                        rating1 = "★★☆☆☆";
                        break;
                    case 3:
                        rating1 = "★★★☆☆";
                        break;
                    case 4:
                        rating1 = "★★★★☆";
                        break;
                    case 5:
                        rating1 = "★★★★★";
                        break;
                }
                let rating2 = "☆☆☆☆☆";
                switch (data.get("testimonial2").rating) {
                    case 1:
                        rating2 = "★☆☆☆☆";
                        break;
                    case 2:
                        rating2 = "★★☆☆☆";
                        break;
                    case 3:
                        rating2 = "★★★☆☆";
                        break;
                    case 4:
                        rating2 = "★★★★☆";
                        break;
                    case 5:
                        rating2 = "★★★★★";
                        break;
                }

                setTestimonials([data.get("testimonial1"), data.get("testimonial2")]);
                setRatings([rating1, rating2]);
            }
            catch (error) {
                console.error('Error fetching testimonials: ', error);
            }
        }
        fetchTestimonials();
    }, []);

    return (
        <div>
            <div>
                <h2>About LMS</h2>
                <p>The Learning Management System (LMS) helps students and instructors manage courses, quizzes, and track performance efficiently.</p>
            </div>
            <div>
                <h2>Featured Courses</h2>
                <table border = "0">
                    <tr>
                        <td width = "33%">
                            <img src = {require(`../images/${firstCourse.image}`)} width = "100%" /><br></br>
                            Course ID: {firstCourse.id}<br></br><br></br>
                            Course Name: {firstCourse.name}<br></br><br></br>
                            Instructor: {firstCourse.instructor}<br></br><br></br>
                            Description: {firstCourse.description}<br></br><br></br>
                            Duration: {firstCourse.duration}<br></br><br></br>
                        </td>
                        <td width = "33%">
                            <img src = {require(`../images/${secondCourse.image}`)} width = "100%" /><br></br>
                            Course ID: {secondCourse.id}<br></br><br></br>
                            Course Name: {secondCourse.name}<br></br><br></br>
                            Instructor: {secondCourse.instructor}<br></br><br></br>
                            Description: {secondCourse.description}<br></br><br></br>
                            Duration: {secondCourse.duration}<br></br><br></br>
                        </td>
                        <td width = "33%">
                            <img src = {require(`../images/${thirdCourse.image}`)} width = "100%" /><br></br>
                            Course ID: {thirdCourse.id}<br></br><br></br>
                            Course Name: {thirdCourse.name}<br></br><br></br>
                            Instructor: {thirdCourse.instructor}<br></br><br></br>
                            Description: {thirdCourse.description}<br></br><br></br>
                            Duration: {thirdCourse.duration}<br></br><br></br>
                        </td>
                    </tr>
                </table>
            </div>
            <div>
                <h2>Testimonials</h2>
                <table border = "0" width = "100%">
                    <tr>
                        <td>
                            Student Name: {testimonials[0].studentName}<br></br><br></br>
                            Course Name: {testimonials[0].courseName}<br></br><br></br>
                            Review: {testimonials[0].review}<br></br><br></br>
                            Rating: {ratings[0]}<br></br><br></br>
                        </td>
                        <td>
                            Student Name: {testimonials[1].studentName}<br></br><br></br>
                            Course Name: {testimonials[1].courseName}<br></br><br></br>
                            Review: {testimonials[1].review}<br></br><br></br>
                            Rating: {ratings[1]}<br></br><br></br>
                        </td>
                    </tr>
                </table>
            </div>

        </div>
    );
}

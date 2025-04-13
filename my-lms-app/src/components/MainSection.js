import React, {useState, useEffect} from 'react';

export default function MainSection() { 
    const [courses, setCourses] = useState([]);

    const [testimonials, setTestimonials] = useState([]);
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        async function fetchCourses() {
            const backend = 'http://127.0.0.1:5000/courses';
            try {
                const response = await fetch(backend, {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'}
                });
                const data = await response.json();
                setCourses([data[0], data[1], data[2]])
            }
            catch (error) {
                console.error("Error fetching courses: ", error)
            }
        }
        fetchCourses();

        async function fetchTestimonials() {
            const backend = 'http://127.0.0.1:5000/testimonials';
            try {
                const response = await fetch(backend, {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'}
                });
                const data = await response.json();

                let rating1 = "☆☆☆☆☆";
                switch (data.testimonial1.rating) {
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
                switch (data.testimonial2.rating) {
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

                setTestimonials([data.testimonial1, data.testimonial2]);
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
                        {courses.length > 0 && (
                        <>    
                            <td width = "33%">
                                <img src = {require(`../images/${courses[0].image}`)} width = "100%" /><br></br>
                                Course ID: {courses[0].id}<br></br><br></br>
                                Course Name: {courses[0].name}<br></br><br></br>
                                Instructor: {courses[0].instructor}<br></br><br></br>
                                Description: {courses[0].description}<br></br><br></br>
                                Duration: {courses[0].duration}<br></br><br></br>
                            </td>
                            <td width = "33%">
                                <img src = {require(`../images/${courses[1].image}`)} width = "100%" /><br></br>
                                Course ID: {courses[1].id}<br></br><br></br>
                                Course Name: {courses[1].name}<br></br><br></br>
                                Instructor: {courses[1].instructor}<br></br><br></br>
                                Description: {courses[1].description}<br></br><br></br>
                                Duration: {courses[1].duration}<br></br><br></br>
                            </td>
                            <td width = "33%">
                                <img src = {require(`../images/${courses[2].image}`)} width = "100%" /><br></br>
                                Course ID: {courses[2].id}<br></br><br></br>
                                Course Name: {courses[2].name}<br></br><br></br>
                                Instructor: {courses[2].instructor}<br></br><br></br>
                                Description: {courses[2].description}<br></br><br></br>
                                Duration: {courses[2].duration}<br></br><br></br>
                            </td>
                        </>
                        )}
                    </tr>
                </table>
            </div>
            <div>
                <h2>Testimonials</h2>
                <table border = "0" width = "100%">
                    <tr>
                        {testimonials.length > 0 && ratings.length > 0 && (
                        <>
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
                        </>
                        )}
                    </tr>
                </table>
            </div>

        </div>
    );
}

import React from 'react';
import {courses} from './../data/courses.js';
import {testimonials} from './../data/testimonials.js';

export default function MainSection() {
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

    var testimonialList = [];
    while (testimonialList.length < 2) {
        const index = Math.floor(Math.random() * 4);
        if (!testimonialList.includes(index)) {
            testimonialList.push(index);
        }
    }
    var firstTestimonial = testimonials[testimonialList[0]];
    var secondTestimonial = testimonials[testimonialList[1]];
    const oneStar = "★☆☆☆☆";
    const twoStar = "★★☆☆☆";
    const threeStar = "★★★☆☆";
    const fourStar = "★★★★☆";
    const fiveStar = "★★★★★";
    var firstRating = "";
    var secondRating = "";
    
    if (firstTestimonial.rating == 1) {
        firstRating = oneStar;
    }
    else if (firstTestimonial.rating == 2) {
        firstRating = twoStar;
    }
    else if (firstTestimonial.rating == 3) {
        firstRating = threeStar;
    }
    else if (firstTestimonial.rating == 4) {
        firstRating = fourStar;
    }
    else if (firstTestimonial.rating == 5) {
        firstRating = fiveStar;
    }

    if (secondTestimonial.rating == 1) {
        secondRating = oneStar;
    }
    else if (secondTestimonial.rating == 2) {
        secondRating = twoStar;
    }
    else if (secondTestimonial.rating == 3) {
        secondRating = threeStar;
    }
    else if (secondTestimonial.rating == 4) {
        secondRating = fourStar;
    }
    else if (secondTestimonial.rating == 5) {
        secondRating = fiveStar;
    }

    return (
        <div>
            <div>
                <h2>About LMS</h2>
                <p>The Learning Management System (LMS) helps students and instructors manage courses, quizzes, and track performance efficiently.</p>
            </div>
            <div>
                <table border = "0">
                    <tr>
                        <td>
                            <img src = {firstCourse.image}></img><br></br>
                            Course ID: {firstCourse.id}<br></br><br></br>
                            Course Name: {firstCourse.name}<br></br><br></br>
                            Instructor: {firstCourse.instructor}<br></br><br></br>
                            Description: {firstCourse.description}<br></br><br></br>
                            Duration: {firstCourse.duration}<br></br><br></br>
                        </td>
                        <td>
                            <img src = {secondCourse.image}></img><br></br>
                            Course ID: {secondCourse.id}<br></br><br></br>
                            Course Name: {secondCourse.name}<br></br><br></br>
                            Instructor: {secondCourse.instructor}<br></br><br></br>
                            Description: {secondCourse.description}<br></br><br></br>
                            Duration: {secondCourse.duration}<br></br><br></br>
                        </td>
                        <td>
                            <img src = {thirdCourse.image}></img><br></br>
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
                <table border = "0">
                    <tr>
                        <td>
                            Student Name: {firstTestimonial.studentName}<br></br><br></br>
                            Course Name: {firstTestimonial.courseName}<br></br><br></br>
                            Review: {firstTestimonial.review}<br></br><br></br>
                            Rating: {firstRating}<br></br><br></br>
                        </td>
                        <td>
                            Student Name: {secondTestimonial.studentName}<br></br><br></br>
                            Course Name: {secondTestimonial.courseName}<br></br><br></br>
                            Review: {secondTestimonial.review}<br></br><br></br>
                            Rating: {secondRating}<br></br><br></br>
                        </td>
                        <td>
                        </td>
                    </tr>
                </table>
            </div>

        </div>
    );
}

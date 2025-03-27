import React, {useState, useEffect} from 'react';

export default function MainSection() {
    const [id, setId] = useState(null);
    const [name, setName] = useState(null);
    const [instructor, setInstructor] = useState(null);
    const [description, setDescription] = useState(null);
    const [duration, setDuration] = useState(null);
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    function fetchData() {
        fetch('./data/courses.js')
        .then((response) => response.json())
        .then((data) => {
            let {id, name, instructor, description, duration, image} = data.results[0];
            setId(id);
            setName(name);
            setInstructor(instructor);
            setDescription(description);
            setDuration(duration);
            setImage(image);
        })
        .catch((error) => {
            console.error('Failed to fetch data:', error.message)
        })
        .finally(() => {
            setIsLoading(false);
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    //const temp = Math.floor(Math.random() * 10) + 1;
    return (
        <div>
            <h2>About LMS</h2>
            <p>The Learning Management System (LMS) helps students and instructors manage courses, quizzes, and track performance efficiently.</p>
            <h2>Featured Courses</h2>
            {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Fetched Data:</h2>
          <pre>{id}</pre>
          <pre>{name}</pre>
          <pre>{instructor}</pre>
          <pre>{description}</pre>
          <pre>{duration}</pre>
          <pre>{image}</pre>
        </div>
        )
      }
        </div>
    );
}

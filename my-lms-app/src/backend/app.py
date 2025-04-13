from flask import Flask, request, jsonify
from flask_cors import CORS
import random
import json
import os

app = Flask(__name__)
CORS(app)

'''
students = [
    {"id": "1", "username": "user1", "password": "password1", "email": "email1", "courses": ["course1", "course2"]},
    {"id": "2", "username": "user2", "password": "password2", "email": "email2", "courses": []}
]
'''

students = []

@app.route('/register', methods = ['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')

    for student in students:
        if student['username'] == username:
            return jsonify({"success": False, "message": "Username is already taken"})
    
    students.append({
        "id": str(len(students) + 1),
        "username": username,
        "password": password,
        "email": email,
        "courses": []
    })
    #verify sign up info was saved: print(students)
    return jsonify({"success": True, "message": "Signup successful"})

@app.route('/login', methods = ['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    for student in students:
        if student['username'] == username and student['password'] == password:
            return jsonify({"success": True, "message": "Login successful"})
    return jsonify({"success": False, "message": "Invalid username or password"})


# receive data from testimonials.json
@app.route('/testimonials', methods = ['GET'])
def testimonials():
    directory = os.path.dirname(os.path.abspath(__file__))
    filepath = os.path.join(directory, 'testimonials.json');
    with open(filepath) as f:
        data = json.load(f)
    random.shuffle(data)
    testimonial1 = data[0]
    testimonial2 = data[1]

    return jsonify({"testimonial1": testimonial1, "testimonial2": testimonial2})


@app.route('/enroll/<student_id>', methods = ['POST'])
def enroll_courses(student_id):
    data = request.get_json()
    new_course = data.get('new_course')

    for student in students:
        if student['id'] == student_id:
            if new_course not in student['courses']:
                student['courses'].append(new_course)
                return jsonify({"success": True, "message": "Courses enrolled successfully"})
            else:
                return jsonify({"success": False, "message": "Already enrolled in this course"})
    return jsonify({"success": False, "message": "Person not found"})


@app.route('/drop/<student_id>', methods = ['DELETE'])
def delete_courses(student_id):
    data = request.get_json()
    course_to_delete = data.get('course_to_delete')

    for student in students:
        if student['id'] == student_id:
            student['courses']= [course for course in students['courses'] if course != course_to_delete] # assuming student[4] is the list of courses
            # or student['courses'].remove(course_to_delete)
            return jsonify({"success": True, "message": "Course deleted successfully"})
    return jsonify({"success": False, "message": "Person not found"})


@app.route('/courses', methods = ['GET'])
def get_courses():
    directory = os.path.dirname(os.path.abspath(__file__))
    filepath = os.path.join(directory, 'courses.json');
    with open(filepath) as f:
        data = json.load(f)
    # says to return all courses, but in assignment 4 we only displaying 3 of the courses?
    # assumed it was similar to testimonials

    # i returned all courses bcuz in Course Catalog we can see all courses
    #you can use data[index] if you only want to return 3 courses in MainSection.js
    random.shuffle(data)
    return jsonify(data)

@app.route('/student_courses/<student_id>', methods = ['GET'])
def student_courses(student_id):

    for student in students:
        if student['id'] == student_id:
            return jsonify({"courses": student['courses']})
    return jsonify({"courses": []})

if __name__ == '__main__':
    app.run(debug = True)
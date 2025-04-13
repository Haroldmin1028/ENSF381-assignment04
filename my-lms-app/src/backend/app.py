from flask import Flask, request, jsonify
from flask_cors import CORS
import random
import json
import os

app = Flask(__name__)
CORS(app)

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
    return jsonify({"success": True, "message": "Signup successful"})

@app.route('/login', methods = ['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    for student in students:
        if student['username'] == username and student['password'] == password:
            return jsonify({"success": True, "message": "Login successful", "id": student['id']})
    return jsonify({"success": False, "message": "Invalid username or password"})


@app.route('/testimonials', methods = ['GET'])
def testimonials():
    directory = os.path.dirname(os.path.abspath(__file__))
    filepath = os.path.join(directory, 'testimonials.json')
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
                return jsonify({"success": True, "message": "Courses enrolled successfully\nRefresh to dispay changes"})
            else:
                return jsonify({"success": False, "message": "Already enrolled in this course"})
    return jsonify({"success": False, "message": "Person not found"})   


@app.route('/drop/<student_id>', methods = ['DELETE'])
def delete_courses(student_id):
    data = request.get_json()
    course_to_delete = data.get('course_to_delete')

    for student in students:
        if student['id'] == student_id:
            student['courses'].remove(course_to_delete)
            return jsonify({"success": True, "message": "Course deleted successfully\nRefresh to dispay changes"})
    return jsonify({"success": False, "message": "Person not found"})


@app.route('/courses', methods = ['GET'])
def get_courses():
    directory = os.path.dirname(os.path.abspath(__file__))
    filepath = os.path.join(directory, 'courses.json')
    with open(filepath) as f:
        data = json.load(f)
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
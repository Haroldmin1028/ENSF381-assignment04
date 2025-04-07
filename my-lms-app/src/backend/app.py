from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

#[[id1, username1, password1, email1, [course1, course2, ...]], [id2, username2,...]] OR
#{id1: [username1, password1, email1, [course1, course2, ...], id2: []]}
students = []

@app.route('/register', methods = ['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if username in students:
        return jsonify({"success": False, "message": "Username is already taken"})
    else:
        students[username] = password # wrong cuz more info will be stored
        return jsonify({"success": True, "message": "Signup successful"})

    

@app.route('/login', methods = ['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if username in students and students[username] == password:
        return jsonify({"success": True, "message": "Login successful"})
    else:
        return jsonify({"success": False, "message": "Invalid username or password"})

# receive data from testimonials.json
@app.route('/testimonials', methods = ['GET'])
def testimonials():
    pass

@app.route('/enroll/<student_id>', methods = ['POST'])
def enroll_courses():
    pass

#unsure which one is right
@app.route('/drop/{student_id}', methods = ['DELETE'])
def delete_courses():
    pass

@app.route('/courses', methods = ['GET'])
def get_courses():
    pass

@app.route('/student_courses/<student_id>', methods = ['GET'])
def student_courses():
    pass

if __name__ == '__main__':
    app.run(debug = True)
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/register', methods = ['POST'])
def register():
    pass

@app.route('/login', methods = ['POST'])
def login():
    pass

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
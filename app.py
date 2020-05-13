from flask import Flask,request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from datetime import datetime, timedelta, date

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
db = SQLAlchemy(app)


class Books(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    bookName = db.Column(db.String(30), nullable=False)
    authName = db.Column(db.String(40), nullable=False)
    briefDesc = db.Column(db.String(200), nullable=False)
    detailedDesc = db.Column(db.String(500), nullable=False)

    def __repr__(self):
        return '<Book %r>' % self.id

class Students(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    studName = db.Column(db.String(20), nullable=False, unique=True)
    studAddress = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return '<Student %r>' % self.id

class Issue(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    studid = db.Column(db.Integer, nullable=False)
    bookid = db.Column(db.Integer, nullable=False)
    retstatus = db.Column(db.Boolean, nullable=False, default=False)
    borrdate = db.Column(db.Date, default=date.today())  

    def __repr__(self):
        return '<Post %r>' % self.id


@app.route('/')
def home():
    return jsonify({"message":"Use `/api/endpoint` to send/fetch data in json"})


###---STUDENTS---###
# LIST ALL STUDENT RECORDS
@app.route('/api/students', methods=['GET'])
def studentslist():
    students = Students.query.all()
    output = []
    for student in students:
        student_data = {}
        student_data['id'] = student.id
        student_data['name'] = student.studName
        student_data['address'] = student.studAddress
        output.append(student_data)
    return jsonify({'students':output})

# VIEW A STUDENT RECORD
@app.route('/api/student/<int:id>', methods=['GET'])
def viewStudent(id):
    student = Students.query.get_or_404(id)
    if not student:
        return jsonify({'message':'student not found'})
    student_data = {}
    student_data['id']=student.id
    student_data['student_name'] = student.studName
    student_data['student_address'] = student.studAddress
    return jsonify(student_data)


# ADD A STUDENT RECORD
@app.route('/api/addstudent', methods=['POST'])
def addstudent():
    data = request.get_json()
    new_student = Students(
        studName = data['student_name'],
        studAddress = data['student_address']
    )
    try:
        db.session.add(new_student)
        db.session.commit()
        return jsonify({'Status': 'New student added'})
    except:
        return jsonify({'Error': 'Unable to create a new student record'})


# DELETE A STUDENT RECORD
@app.route('/api/delstudent/<int:id>', methods=['DELETE'])
def delstudent(id):
    student = Students.query.get_or_404(id)
    if not student:
        return jsonify({'message': 'user not found'}), 400
    try:
        db.session.delete(student)
        db.session.commit()
        return jsonify({"message": "Student record deleted"})
    except:
        return jsonify({"message": "Unable to delete student record"})

###---BOOKS---###
# LIST ALL BOOK RECORDS
@app.route('/api/books', methods=['GET'])
def bookslist():
    books = Books.query.all()
    output = []
    for book in books:
        book_data = {}
        book_data['id'] = book.id
        book_data['book_name'] = book.bookName
        book_data['author_name'] = book.authName
        book_data['brief_description'] = book.briefDesc
        book_data['detailed_description'] = book.detailedDesc
        output.append(book_data)
    return jsonify({'books':output})

# VIEW A BOOK RECORD
@app.route('/api/book/<int:id>', methods=['GET'])
def viewBook(id):
    book = Books.query.get_or_404(id)
    if not book:
        return jsonify({'message':'book not found'})
    book_data = {}
    book_data['id']= book.id
    book_data['book_name']= book.bookName
    book_data['author_name']= book.authName
    book_data['brief_description']= book.briefDesc
    book_data['detailed_description']= book.detailedDesc
    return jsonify(book_data)

# ADD A BOOK RECORD
@app.route('/api/addbook', methods=['POST'])
def addbook():
    data = request.get_json()
    new_book = Books(
        bookName = data['book_name'],
        authName=data['author_name'],
        briefDesc=data['brief_desc'],
        detailedDesc=data['detailed_desc'],
    )
    try:
        db.session.add(new_book)
        db.session.commit()
        return jsonify({'Status': 'New book record added'})
    except:
        return jsonify({'Error': 'Unable to create a new book record'})

# DELETE A BOOK RECORD
@app.route('/api/delbook/<int:id>', methods=['DELETE'])
def delbook(id):
    book = Books.query.get_or_404(id)
    if not book:
        return jsonify({'message': 'book record not found'}), 400
    try:
        db.session.delete(book)
        db.session.commit()
        return jsonify({"message": "Book record deleted"})
    except:
        return jsonify({"message": "Unable to delete book record"})

###---BOOK ISSUE---###
# LIST ALL ISSUES
@app.route('/api/issues', methods=['GET'])
def issues():
    issues = Issue.query.all()
    output = []
    for issue in issues:
        issue_data = {}
        issue_data['id'] = issue.id
        issue_data['stud_id'] = issue.studid
        issue_data['issued_to'] = Students.query.filter_by(id=issue.studid).first().studName
        issue_data['book_id'] = issue.bookid
        issue_data['issued_book'] = Books.query.filter_by(id=issue.bookid).first().bookName
        output.append(issue_data)
    return jsonify({'issueDetails':output})

# NEW  BOOK ISSUE
@app.route('/api/newissue', methods=['POST'])
def newissue():
    data = request.get_json()
    new_issue = Issue(
        studid = data['issue_student'],
        bookid= data['issue_book']
    )
    try:
        db.session.add(new_issue)
        db.session.commit()
        return jsonify({'Status': 'Book issued to student'})
    except :
        return jsonify({'Error': 'Database Error'})
    return jsonify({'Error': 'This student already issued this book'}), 409

# GET STUDENT'S BOOK ISSUE DETAILS
@app.route('/api/getissueuser/<int:id>')
def getIssueUser(id):
    issue_record = Issue.query.filter_by(studid=id).all()
    # days_remaining = ret_date - date.today()
    output=[]
    for data in issue_record:
        ret_date = data.borrdate + timedelta(days=10)
        # today = date.today()
        # days_remaining = ret_date - today
        issue_data = {}
        issue_data['book_id'] = data.bookid
        issue_data['book_issuedto'] = Students.query.get_or_404(id).studName
        issue_data['book_name'] = Books.query.filter_by(id=data.bookid).first().bookName
        issue_data['book_author'] = Books.query.filter_by(id=data.bookid).first().authName
        issue_data['book_issuedate'] = f"{data.borrdate}"[:10]
        issue_data['book_returndate'] = f"{ret_date}"[:12]
        issue_data['book_returnstatus'] = data.retstatus
        rem_days = f"{ret_date - date.today()}"
        borr_days = f"{date.today() - data.borrdate}"
        issue_data['book_issuesince'] = borr_days[:2]
        issue_data['book_returndaysremain'] = rem_days[:2]
        output.append(issue_data)
    return jsonify({'issue_details':output})

# LIST ALL STUDENTS THAT BORROWED A PARTICULAR BOOK
@app.route('/api/getbookuser/<int:id>')
def getBookUser(id):
    issues_record = Issue.query.filter_by(bookid=id).all()
    output = []
    for data in issues_record:
        issue_data = {}
        issue_data['student_id'] = data.studid
        issue_data['student_name'] = Students.query.filter_by(id=data.studid).first().studName
        issue_data['book_name'] = Books.query.filter_by(id=data.bookid).first().bookName
        output.append(issue_data)
    return jsonify({'issue_details':output})

if(__name__ == '__main__'):
    app.run(host='0.0.0.0',debug=True,port=5000)
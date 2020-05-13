## Initial Setup

To get started, you need Python 3.8x and the following dependencies installed

 **Install virtualenv**

```bash
pip install virtualenv
```



**Create a new virtual environment**

```bash
virtualenv venv
```

​	

**Activate environment**

​	In Windows: 

```bash
.\venv\Scripts\activate.bat
```

​	In Linux:

```bash
$ source .\venv\bin\activate
```



**Install Flask and other dependencies**

```bash
pip install flask flask-sqlalchemy flask-cors
```



**Open python interpreter mode and enter the following**

```python
>>> from app import db
>>> db.create_all()
>>> exit()
```

​	

**Start flask server**

```bash
python app.py
```



## Testing endpoints
Now that you have the flask server running, you can now make requests to this flask server.
Or  you can test from the live version of the app: 
https://salty-island-31096.herokuapp.com

It is recommended that you use REST API testing tools like [Postman](https://www.postman.com/) or [Insomnia REST](https://insomnia.rest/)

### Endpoints

|  Method  | Endpoint                        | Body (Content-type:JSON)                                     |
| :------: | :------------------------------ | :----------------------------------------------------------- |
|  [GET]   | `/api/books`                    |                                                              |
|  [GET]   | `/api/book/<bookid>`            |                                                              |
|  [POST]  | `/api/addbook`                  | "book_name":"String",<br/>"author_name":"String",<br/>"brief_desc":"String",<br/>"detailed_desc":""String"" |
| [DELETE] | `/api/delbook/<bookid>`         |                                                              |
|  [GET]   | `/api/students`                 |                                                              |
|  [GET]   | `/api/book/<studentid>`         |                                                              |
|  [POST]  | `/api/addstudent`               | "student_name":"String",<br/>"student_address":"String"      |
| [DELETE] | `/api/delstudent/<studentid>`   |                                                              |
|  [GET]   | `/api/issues`                   |                                                              |
|  [GET]   | `/api/getbookuser/<bookid>`     |                                                              |
|  [GET]   | `/api/getissueuser/<studentid>` |                                                              |
|  [POST]  | `/api/newissue`                 | "issue_student":(Studentid),<br/>	"issue_book":(Bookid)   |


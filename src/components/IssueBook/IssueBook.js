import React from "react";
import libapi from "../libapi";
import { Redirect, Link } from "react-router-dom";
import { Card, Button, Form } from "react-bootstrap";

class IssueBook extends React.Component {
  state = {
    book_id: null,
    bookName: null,
    authName: null,
    briefDesc: null,
    detailedDesc: null,
    student_id: 1,
    students: [],
    formSuccess: false
  };
  componentDidMount() {
    const { book_id } = this.props.location.state;
    this.setState(() => ({ book_id }));
    libapi.get("/api/students").then(res => {
      this.setState({
        students: res.data.students
      });
    }).catch(err=>console.log(err))
    libapi.get("/api/book/" + book_id).then(res => {
      this.setState({
        bookName: res.data.book_name,
        authName: res.data.author_name,
        briefDesc: res.data.brief_description,
        detailedDesc: res.data.detailed_description
      });
    }).catch(err=>console.log(err))
  }

  submitForm(event) {
    event.preventDefault();
    libapi
      .post("/api/newissue", {
        issue_student: this.state.student_id,
        issue_book: this.state.book_id
      })
      .then(res => {
        this.setState({ formSuccess: true });
      }).catch(err => {
          console.log(err)
          alert(err)
      })
  }

  render() {
    if (this.state.formSuccess === true) {
      return (
        <Redirect
          to={{
            pathname: "/viewBook",
            state: { id: this.state.book_id }
          }}
        />
      );
    }

    const students = this.state.students.map(std => {
      return (
        <option key={std.id} value={std.id}>
          {std.name}
        </option>
      );
    });
    return (
      <div>
        <Card style={{ maxWidth: "500px", margin: "auto" }}>
          <Card.Header>
            <h3>Assign Book to student</h3>
          </Card.Header>
          <Card.Body>
            <Card style={{ maxWidth: "300px", margin: "auto" }}>
              <Card.Body>
                <Card.Title>{this.state.bookName}</Card.Title>
                <Card.Subtitle>{this.state.authName}</Card.Subtitle>
                <Card.Text>{this.state.briefDesc}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/viewBook",
                    state: { id: this.state.book_id }
                  }}
                >
                  <Button>View Book</Button>
                </Link>
              </Card.Footer>
            </Card>
          </Card.Body>
          <Card.Footer>
            <Form>
              <Form.Group>
                <Form.Label>Select student</Form.Label>
                <Form.Control
                  as="select"
                  id="form"
                  onChange={e => this.setState({ student_id: e.target.value })}
                >
                  {students}
                </Form.Control>
              </Form.Group>
              <center>
                <Button onClick={event => this.submitForm(event)}>
                  Assign Book
                </Button>
              </center>
            </Form>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

export default IssueBook;

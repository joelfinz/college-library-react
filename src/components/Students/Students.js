import React from "react";
import libapi from "../libapi";
import Post from "./Post";
import { Link } from "react-router-dom";
import { ListGroup, Card, Col, Button, Row } from "react-bootstrap";

class Students extends React.Component {
  state = {
    students: [],
    viewState: "list"
  };

  componentDidMount() {
    libapi.get("/api/students")
      .then(res => {
      this.setState({
        students: res.data.students
      })
    }).catch(err => console.log(err))
  }

  render() {
    const students = this.state.students.map(std => {
      return (
        <Post
          key={std.id}
          id={std.id}
          stdname={std.name}
          stdaddress={std.address}
        ></Post>
      );
    });

    return (
      <div>
        <Card style={{ maxWidth: "500px", margin: "auto" }}>
          <Card.Header>
            <Row>
              <Col>
                <h2>Students</h2>
              </Col>
              <Col>
                <Link to="/addStudent">
                  <Button style={{ float: "right" }}>Add Student</Button>
                </Link>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <ListGroup>{students}</ListGroup>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Students;

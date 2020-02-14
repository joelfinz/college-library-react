import React from "react";
import libapi from "../libapi";
import { Redirect } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";

class AddStudent extends React.Component {
  state = {
    name: null,
    address: null,
    formSuccess: false
  };
  submitForm(event) {
    event.preventDefault();
    libapi
      .post("/api/addstudent", {
        student_name: this.state.name,
        student_address: this.state.address
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
      return <Redirect to="/students" />;
    }
    return (
      <div>
        <Card style={{ maxWidth: "500px", margin: "auto" }}>
          <Card.Header>
            <h3>Add Student record</h3>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={event => this.submitForm(event)}>
              <Form.Group>
                <Form.Label>Student Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  onChange={e => this.setState({ name: e.target.value })}
                  required="required"
                  placeholder="Enter student name"
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  name="address"
                  onChange={e => this.setState({ address: e.target.value })}
                  required="required"
                  placeholder="Enter address"
                ></Form.Control>
              </Form.Group>
              <center>
                            <Button
                                type="submit"
                  variant="secondary"
                //   onClick={event => this.submitForm(event)}
                >
                  Add student
                </Button>
              </center>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default AddStudent;

import React from "react";
import libapi from "../libapi";
import { Redirect } from "react-router-dom";
import { Form, Card, Button } from "react-bootstrap";

class AddBook extends React.Component {
  state = {
    book_name: null,
    auth_name: null,
    brief_desc: null,
    detailed_desc: null,
    formSuccess: false
  };
  submitForm(event) {
    event.preventDefault();
    libapi
      .post("/api/addbook", {
        book_name: this.state.book_name,
        author_name: this.state.auth_name,
        brief_desc: this.state.brief_desc,
        detailed_desc: this.state.detailed_desc
      })
      .then(res => {
        this.setState({ formSuccess: true });
      })
      .catch(err => {
        console.log(err);
        alert(err);
      });
  }

  render() {
    if (this.state.formSuccess === true) {
      return <Redirect to="/books" />;
    }

    return (
      <div>
        <Card style={{ maxWidth: "500px", margin: "auto" }}>
          <Card.Header>
            <h2>Add new book record</h2>
          </Card.Header>
          <Form onSubmit={event => this.submitForm(event)}>
            <Card.Body>
              <Form.Group>
                <Form.Label>Book name</Form.Label>
                <Form.Control
                  type="text"
                  required="required"
                  placeholder="Enter book name"
                  onChange={e => this.setState({ book_name: e.target.value })}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Author name</Form.Label>
                <Form.Control
                  type="text"
                  required="required"
                  placeholder="Enter author name"
                  onChange={e => this.setState({ auth_name: e.target.value })}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Brief description</Form.Label>
                <Form.Control
                  type="text"
                  required="required"
                  placeholder="Enter brief description"
                  onChange={e => this.setState({ brief_desc: e.target.value })}
                ></Form.Control>
                <Form.Text className="text-muted">
                  Enter a short description in 10-20 words
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Detailed description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  required="required"
                  onChange={e =>
                    this.setState({ detailed_desc: e.target.value })
                  }
                />
                <Form.Text className="text-muted">
                  Enter a long description in 100-200 words
                </Form.Text>
              </Form.Group>
            </Card.Body>
            <Card.Footer>
              <center>
                <Button
                  type="submit"
                // onClick={event => this.submitForm(event)}
                >
                  Add Book
                </Button>
              </center>
            </Card.Footer>
          </Form>
        </Card>
      </div>
    );
  }
}

export default AddBook;

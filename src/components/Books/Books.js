import React from "react";
import libapi from "../libapi";
import Post from "./Post";
import { Link } from "react-router-dom";
import { Row, Col, Button, Card } from "react-bootstrap";

class Books extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    libapi.get("/api/books").then(res => {
      this.setState({
        books: res.data.books
      });
    }).catch(err => console.log(err))
  }
  render() {
    const books = this.state.books.map(book => {
      return (
        <Post
          key={book.id}
          id={book.id}
          bookname={book.book_name}
          authname={book.author_name}
          briefdesc={book.brief_description}
        />
      );
    });

    return (
      <div>
        <Card style={{ maxWidth: "700px", margin: "auto" }}>
          <Card.Header>
            <Row>
              <Col>
                <h2>Books</h2>
              </Col>
              <Col>
                <Link className="dark" style={{ float: "right" }} to="/addBook">
                  <Button>Add Book</Button>
                </Link>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Row>{books}</Row>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Books;

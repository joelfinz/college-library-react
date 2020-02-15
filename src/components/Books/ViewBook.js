import React from "react";
import libapi from "../libapi";
import { Link } from "react-router-dom";
import { Card, Button, ListGroup, Spinner } from "react-bootstrap";
import IssuedUsers from "../IssueBook/IssuedUsers";
import ReactAvatar from "react-avatar";

class ViewBook extends React.Component {
  state = {
    id: null,
    bookName: null,
    authName: null,
    briefDesc: null,
    detailedDesc: null,
    issuedlist: []
  };

  componentDidMount() {
    const { id } = this.props.location.state;
    this.setState(() => ({ id }));
    libapi.get("/api/book/" + id).then(res => {
      this.setState({
        bookName: res.data.book_name,
        authName: res.data.author_name,
        briefDesc: res.data.brief_description,
        detailedDesc: res.data.detailed_description
      });
    }).catch(err=>console.log(err))
    libapi.get("/api/getbookuser/" + id).then(res => {
      this.setState({
        issuedlist: res.data.issue_details
      });
    }).catch(err=>console.log(err))
  }

  render() {
    if (this.state.bookName != null) {
      
      const issuedList = this.state.issuedlist.map(issue => {
        return (
          <div>
          <IssuedUsers
            key={issue.student_id}
            id={issue.student_id}
            studname={issue.student_name}
          />
        </div>
      );
    });
    return (
      <div>
        <Card style={{ maxWidth: "500px", margin: "auto" }}>
          <Card.Header>
            <h3>Book Details</h3>
          </Card.Header>

          <Card.Body>
            <ReactAvatar round="5px" />
            <Card.Title>
              <h2>{this.state.bookName}</h2>
            </Card.Title>
            <Card.Subtitle>
              <h5>
                <i>{this.state.authName}</i>
              </h5>
            </Card.Subtitle>
            <Card.Text>{this.state.detailedDesc}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Link>
              <Link
                to={{
                  pathname: "/issueBook",
                  state: { book_id: this.state.id }
                }}
                >
                <Button>Assign</Button>
              </Link>
            </Card.Link>
          </Card.Footer>
        </Card>
        <br />
        <Card style={{ maxWidth: "500px", margin: "auto" }}>
          <Card.Header>
            <h4>Students who have borrowed this book</h4>
          </Card.Header>
          <Card.Body>
            <ListGroup>{issuedList}</ListGroup>
          </Card.Body>
        </Card>
      </div>
    );
    } else
      return (
        <center>
        <Spinner animation="border" role="status"></Spinner>
        </center>
      )
  }
}

export default ViewBook;

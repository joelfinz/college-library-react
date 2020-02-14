import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import ReactAvatar from "react-avatar";

const Post = props => {
  return (
    <div>
      <Card style={{ margin: "5px",maxWidth:"400px" }}>
        <Card.Body>
          <ReactAvatar name={props.stdname} size="100" round="5px" />
          &nbsp;
          <Card.Title>{props.bookname}</Card.Title>
          <Card.Subtitle>by {props.authname}</Card.Subtitle>
          <Card.Text>{props.briefdesc}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Link>
            <Link
              style={{ textDecoration: "none" }}
              to={{
                pathname: "/viewBook",
                state: { id: props.id }
              }}
            >
              <Button variant="secondary">View</Button>
            </Link>
          </Card.Link>
          <Card.Link>
            <Link
              to={{
                pathname: "/issueBook",
                state: { book_id: props.id }
              }}
            >
              <Button variant="secondary">Assign</Button>
            </Link>
          </Card.Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Post;

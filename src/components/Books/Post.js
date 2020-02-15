import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import ReactAvatar from "react-avatar";

const Post = props => {
  return (
    <div>
      <Card style={{ margin: "5px",maxWidth:"400px",minHeight:"450px",alignSelf:"auto" }}>
        <Card.Body>
          <ReactAvatar name={props.stdname} size="100" round="5px" style={{marginBottom:"20px"}} />
          
          <Card.Title>{props.bookname}</Card.Title>
          <Card.Subtitle>by {props.authname}</Card.Subtitle><br/>
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

import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import ReactAvatar from "react-avatar";

const Post = props => {
  return (
    <div>
      <Link
        to={{
          pathname: "/viewStudent",
          state: { id: props.id }
        }}
        style={{ textDecoration: "none" }}
      >
        <ListGroup.Item>
          <ReactAvatar name={props.stdname} size="40px" round={true} />
          &nbsp;
          {props.stdname}
        </ListGroup.Item>
      </Link>
    </div>
  );
};

export default Post;

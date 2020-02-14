import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactAvatar from "react-avatar";

const IssuedUsers = props => {
  return (
    <div>
      <Link
        to={{
          pathname: "/viewStudent",
          state: { id: props.id }
        }}
      >
        <ListGroup.Item>
          <ReactAvatar name={props.studname} size="40px" round={true} />
          &nbsp;
          {props.studname}
        </ListGroup.Item>
      </Link>
    </div>
  );
};

export default IssuedUsers;

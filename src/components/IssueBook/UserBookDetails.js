import React from "react";
import { Link } from "react-router-dom";

const UserBookDetails = props => {
  return (
    <tr>
      <td>
        <Link
          style={{ textDecoration: "none" }}
          to={{
            pathname: "/viewBook",
            state: { id: props.book_id }
          }}
        >
          {props.book_name}
        </Link>
      </td>
      <td>{props.author_name}</td>
      <td>{props.issuedate}</td>
      <td>{props.issueddays}</td>
      <td>{props.returndate}</td>
      <td>{props.days}</td>
    </tr>
  );
};

export default UserBookDetails;

import React from "react";
import libapi from "../libapi";
import UserBookDetails from "../IssueBook/UserBookDetails";
import { Card, Table } from "react-bootstrap";
import ReactAvatar from "react-avatar";

class ViewStudent extends React.Component {
  state = {
    id: null,
    studName: null,
    studAddress: null,
    issueData: []
  };

  componentDidMount() {
    const { id } = this.props.location.state;
    this.setState(() => ({ id }));
    libapi.get("/api/student/" + id).then(res => {
      this.setState({
        studName: res.data.student_name,
        studAddress: res.data.student_address
      });
    }).catch(err=>console.log(err))
    libapi.get("/api/getissueuser/" + id).then(res => {
      this.setState({
        issueData: res.data.issue_details
      });
    }).catch(err=>console.log(err))
  }
  render() {
    const issueDetails = this.state.issueData.map(issue => {
      if (issue.book_issuesince === "0:")
        issue.book_issuesince = "Issued today"
      return (
          <UserBookDetails
            key={issue.book_id}
            book_id={issue.book_id}
            book_name={issue.book_name}
            author_name={issue.book_author}
            issuedate={issue.book_issuedate}
            issueddays={issue.book_issuesince}
            returndate={issue.book_returndate}
            days={issue.book_returndaysremain}
          />
      );
    });
    return (
      <div>
        <Card style={{ maxWidth: "500px", margin: "auto" }}>
          <Card.Header>
            <h3>Student Details</h3>
          </Card.Header>
          <Card.Body>
            <center>
              <ReactAvatar name={this.state.studName} round={true}/>
            <Card.Text><h5><b>{this.state.studName}</b></h5></Card.Text>
            <Card.Text>{this.state.studAddress}</Card.Text>
            </center>
          </Card.Body>
        </Card>
        <br />
        <Card style={{maxWidth:"500px",margin:"auto"}}>
          <Card.Header>
            <h3>Borrowed books</h3>
          </Card.Header>
          <Card.Body>
            <Table size="sm" responsive>
              <thead>
                <tr>
                  <th>Book</th>
                  <th>Author</th>
                  <th>Issued on</th>
                  <th>Days passed</th>
                  <th>Return date</th>
                  <th>Days left</th>
                </tr>
              </thead>
              <tbody>{issueDetails}</tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ViewStudent;

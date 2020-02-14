import React from "react";
import ReactDOM from "react-dom";
import Navbarcomp from "./Navbarcomp";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

import Home from "./components/Home";
import Books from "./components/Books/Books";
import Students from "./components/Students/Students";
import AddStudent from "./components/Students/AddStudent";
import AddBook from "./components/Books/AddBook";
import ViewStudent from "./components/Students/ViewStudent";
import ViewBook from "./components/Books/ViewBook";
import IssueBook from "./components/IssueBook/IssueBook";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbarcomp style={{ marginTop: "1px" }} />
        <Container style={{ marginTop: "70px" }}>
          <Route path="/" exact component={Home}></Route>
          <Route path="/books" exact component={Books}></Route>
          <Route path="/addBook" exact component={AddBook}></Route>
          <Route path="/students" exact component={Students}></Route>
          <Route path="/addStudent" exact component={AddStudent}></Route>
          <Route path="/viewStudent" exact component={ViewStudent}></Route>
          <Route path="/viewBook" exact component={ViewBook}></Route>
          <Route path="/issueBook" exact component={IssueBook}></Route>
        </Container>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

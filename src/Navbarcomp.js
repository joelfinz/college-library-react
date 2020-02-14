import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";



const Navbarcomp = () => {
  

  return (
    <div>
      
      <Navbar variant="dark" bg="dark" theme="primary" expand="sm" fixed="top">
        <Link to="/"><Navbar.Brand>College Library</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" >
        <Nav.Link><Link to="/books" style={{color:'white'}}>Books</Link></Nav.Link>
        <Nav.Link><Link to="/students" style={{color:'white'}}>Students</Link></Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
        
  );
};

export default Navbarcomp;

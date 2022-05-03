import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import {Navbar, Nav, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";


export class Navigation extends Component {
    render() {
        return(
            <Navbar className="nav" fixed="top">
                <Container>
                    <Navbar.Brand href="/" className="nav-brand">CONNEC<span className='underline'>TA</span></Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto nav-links">
                            <Nav.Link as={Link} to=''>Home</Nav.Link>
                            <Nav.Link target="_blank" rel="noreferrer" href="https://connecta-b3be0.web.app/">About Us</Nav.Link>
                            <Nav.Link as={Link} to='workshops'><Button role="button" variant="outline-dark">Start Workshop</Button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Navigation;
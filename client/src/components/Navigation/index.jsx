import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.css';

/**
 * Navbar component that goes at the top of all pages.
 * 
 */
const Navigation = () => {
    return (
        <Navbar variant="dark" expand="md" fixed="top">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <ul className="nav-list">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/upcoming">Upcoming</Link></li>
                            <li>
                                <Link to="/recordings">Recordings</Link>
                                <ul className="rec-sections">
                                    <li><HashLink to="/recordings#20222023">2022 – 2023</HashLink></li>
                                    <li><HashLink to="/recordings#20212022">2021 – 2022</HashLink></li>
                                    <li><HashLink to="/recordings#20202021">2020 – 2021</HashLink></li>
                                    <li><HashLink to="/recordings#20192020">2019 – 2020</HashLink></li>
                                    <li><HashLink to="/recordings#20182019">2018 – 2019</HashLink></li>
                                    <li><HashLink to="/recordings#20172018">2017 – 2018</HashLink></li>
                                    <li><HashLink to="/recordings#20162017">2016 – 2017</HashLink></li>
                                </ul>
                            </li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/join">Join</Link></li>
                        </ul>


                    </Nav>
                </Navbar.Collapse>





            </Container>
        </Navbar>
    );
};

export default Navigation;
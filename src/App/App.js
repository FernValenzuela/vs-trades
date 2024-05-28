import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ProjectsServices from './components/ProjectsServices';
import { Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
          <Navbar.Brand as={Link} to="/">V&S Trades</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
              <Nav.Link as={Link} to="/projects-services">Projects and Services</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="content" style={{ marginTop: '56px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/projects-services" element={<ProjectsServices />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
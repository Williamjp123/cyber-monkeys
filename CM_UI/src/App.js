import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppHeader from './components/AppHeader.js'
import Login from './components/Login.js'
import {Navbar, Container, Nav} from 'react-bootstrap';
import Directory from './components/Directory.js';
import UnknownDevices from './components/UnknownDevices.js';
import Help from './components/Help.js';
import RecentSummary from './components/RecentSummary.js';
import { BrowserRouter as Router, Route, Routes, Link, Switch} from "react-router-dom";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';

function App() {
  return ( 
    <div className='navBar'>
    
      <AppHeader/>
      <Navbar bg="light" variant="light">
      <Container fluid>
      <Navbar.Brand href="/"></Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/RecentSummary"><ContentPasteSearchIcon />Recent Sumamry</Nav.Link>
        <Nav.Link href="/Directory"><PeopleOutlineIcon /> Directory </Nav.Link>
        <Nav.Link href="/UnknownDevices"><PeopleOutlineIcon /> Unknown Devices </Nav.Link>
        <Nav.Link href="/Help"><HelpOutlineIcon /> Help </Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/RecentSummary" element={<RecentSummary />} />
        <Route path="/Directory" element={<Directory />} />
        <Route path="/UnknownDevices" element={<UnknownDevices />} />
        <Route path="/Help" element={<Help />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

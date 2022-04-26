import React from 'react';
import '../css/Header.css';
import { Container } from 'react-bootstrap';


function Header(){
    return(
        
        <Container fluid>
        <div className="header" style={{backgroundColor: '#dbe3e6', textAlign: 'center'}}>
            <br />
            <h4 style={{color:"#0c2a62"}}>On Call Schedule Uploader</h4>
        </div>
        </Container>
    );
}

export default Header;
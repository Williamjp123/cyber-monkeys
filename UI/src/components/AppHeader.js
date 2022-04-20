import React from 'react';
import '../css/AppHeader.css';
import { Container } from 'react-bootstrap';
import raytheonlogo1 from '../assets/raytheonlogo1.png';


function AppHeader(){
    return(
        
        <Container fluid style={{background: '#FFFFFF 0% 0% no-repeat padding-box', textAlign: 'center'}}>
        <div className="header" style={{background: '#FFFFFF 0% 0% no-repeat padding-box', textAlign: 'center'}}>
            <br />
            <img className="img-fluid" src={raytheonlogo1} alt="Responsive image"/>
            <br />
        </div>
        </Container>
    );
}

export default AppHeader;
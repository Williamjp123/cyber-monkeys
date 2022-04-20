import React from 'react';
import { Container } from 'react-bootstrap';
import '../Styles/Help.css';

function Help(){
    return(

        
        <div className="HelpPage">
        
        <Container fluid>
        <div className="head">
            <br />
            <>&nbsp;Help</>
        </div>
       
        
        
            <Container fluid>
            <div className="HowTo">
            <br />
            <h2 className="HowToText">&nbsp;&nbsp;&nbsp;How to use the Cyber Guard Wesbite</h2>

            

            
                <div class='row'>
                    <div class='col'>
                        <Container fluid>
                        <div className="LeftContainer">
                        <br />
                        <Container fluid>
                        <div className="h4">Quick Start Guide</div>
                        <p>
                                       1. Use the “Search” or “Filter by Date” boxes near the top to filter and find desired anomalies.<br />
                                       2. Only anomalies from recent work week will be shown<br />
                                       3. When the desired anomaly is found, select the operation to be conducted on it<br />
                                       4. If a device is not registered within the organization, head to Directory and register that device.<br />
                                        </p>   
                        <br />
                        <p>
                                       For a more detailed explanation, download this document.</p>          
                        </Container>
  
                        
                        </div>
                        </Container>
                    </div>
                    <br />  
                    
                    <div class='col'>
                        <Container fluid>
                        
                        
                        <div className="LeftContainer">
                        <br />
                        <Container fluid>
                        <div className="h4">If You Notice Incorrect Information</div>
                        <p>
                                       *Contact the Security Center at <a href="tel:+123-456-7890">123-456-7890</a></p>
                        <p>
                                        If you encounter any problems with the website itself or need to grant/remove administrator access please see below</p>
                        <p>
                                       *Submit a Ticket on the <a href="google.com">Help Desk Website</a></p>
                        
                        </Container>
                        </div>
                        
                        </Container>
                    </div>
                   
                </div>
                
            <br />
            </div>

            </Container>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            </Container>

            </div>
        

        
          
    );
}

export default Help;
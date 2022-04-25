import React, {useState} from 'react';
import '../css/Footer.css'; 
import logo from '../assets/usahealth.png';
import { Button, Modal, Container } from 'react-bootstrap';


//function revFunction(){
//    document.getElementById("rnum").disabled = false;
//}


function Footer(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <Container fluid>
        <div className="" style={{ backgroundColor: "#dbe3e6" }}>
            <div className="PublishButton" style={{ display: "flex"}}>
                
                <Button id="rnum" style={{ marginLeft: "auto" }} onClick={handleShow} disabled={true}>
                    Publish
                </Button>

                <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Please confirm you want to publish the schedule.</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Continue
                </Button>
            </Modal.Footer>
        </Modal>

                 
            </div>
        </div>
        </Container>
    );
}

export default Footer; 


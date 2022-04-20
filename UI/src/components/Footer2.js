import React,{useState} from 'react';
import {Container, Modal, Button} from 'react-bootstrap';



function Footer2(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <Container fluid>
        <div className="" style={{ backgroundColor: "#dbe3e6" }}>
            <div className="PublishButton" style={{display: 'flex'}}>
                
                <Button id="rnum" style={{ marginLeft: "auto" }} onClick={handleShow}>
                    Publish
                </Button>

                <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Please confirm you want to publish the schedule.</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>

                 
            </div>
        </div>
        </Container>
    );
}

export default Footer2;

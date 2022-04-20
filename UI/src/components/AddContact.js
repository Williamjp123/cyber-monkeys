import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import PersonAddIcon from '../Feather Icons/user-plus.svg';
import AddContactForm from './AddContactForm';


function AddContact() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="danger" onClick={handleShow}>
            <img className="img-responsive" src={PersonAddIcon} alt="PersonAddIcon"/>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        dialogClassName="modal-90w"
        size="lg"
        centered
        
      >
        <Modal.Header closeButton style={{background: '#DBE3E6'}}> 
          
        </Modal.Header>
        <Modal.Body style={{background: '#DBE3E6'}}>
          <AddContactForm />
        </Modal.Body>
        <Modal.Footer style={{background: '#DBE3E6'}}>
          
        </Modal.Footer>
      </Modal>
      </div>

    );
}

export default AddContact

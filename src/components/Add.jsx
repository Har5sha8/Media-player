import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Add(){
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        <>

        <div className=" d-flex align-item-center">
        <h5>
            Upload New Video
        </h5>
        <i class="fa-solid fa-cloud-arrow-up ms-3 mt-2" style={{color:"white"}}  onClick={handleShow}></i>
        </div>
       

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:"23px"}}><i class="fa-solid fa-film text-warning me-3"></i>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>please fill the following details</p>
        <Form className="border border-secondary p-3">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
       
        <Form.Control type="text" placeholder="Enter video Id" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
       
        <Form.Control type="text" placeholder="Enter video caption" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
       
        <Form.Control type="text" placeholder="Enter video Image  URL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
       
        <Form.Control type="text" placeholder="Enter youtube Video Link" />
      </Form.Group>
     
  
        
      
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="btn  bg-warning" variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
        
        </>

    )
}
export default Add;
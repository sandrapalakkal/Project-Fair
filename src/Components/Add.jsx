import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import uploadImg from '../assets/uploadImg.png'

const Add = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className='btn btn-primary'><i className='fa-solid fa-plus me-2'></i>Add Project</button>
      <Modal size='lg' centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <label>
                <input type="file" style={{ display: 'none' }} />
                <img src={uploadImg} className='img-fluid' height={'125px'} alt="" />
              </label>
            </div>
            <div className="col-lg-8">
              <div className="mb-1">
                <input type="text" className='form-control fw-bolder' placeholder='Project Title' />
              </div>
              <div className="mb-1">
                <input type="text" className='form-control fw-bolder' placeholder='Language Used in Project' />
              </div>
              <div className="mb-1">
                <input type="text" className='form-control fw-bolder' placeholder='Project GitHub Link' />
              </div>
              <div className="mb-3">
                <input type="text" className='form-control fw-bolder' placeholder='Project Website Link' />
              </div>
            </div>
          </div>
          <div>
            <input type="text" className='form-control fw-bolder' placeholder='Project Overview' />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal >
    </>
  )
}

export default Add
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import {SlUserFollow} from "react-icons/sl";
import  { useState } from "react";
import "./input.css";
import axios from "axios";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="100px"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         <h2>Регистрация</h2>
         
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p> 
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <span variant="primary" onClick={(e) => {
      e.preventDefault()
        setModalShow(true)}}>
        <a href=""><SlUserFollow></SlUserFollow>Вход </a>
      </span>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export default App;
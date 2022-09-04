import React, { useState } from "react";
//import posters from '../posters-data'
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {useDispatch} from "react-redux";
import {addToCart} from "../actions/cartActions";

const Poster = ({ poster }) => {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(poster,quantity,varient))
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="card my-3" style={{ width: "18rem", marginTop: "30px" }}>
        <img
          className="card-img-top img-fluid"
          src={poster.image}
          alt="..."
          style={{ width: "100%", height: "490px", cursor:"pointer" }}
          onClick={handleShow}
        />
        <div className="card-body">
          <h5 className="card-title text-center">{poster.name}</h5>
          <hr />
          <div>
            <Row>
              <Col md={6}>
                <h6>Sizes</h6>
                <select
                  value={varient}
                  onChange={(e) => setVarient(e.target.value)}
                >
                  {poster.varients.map((varient) => (
                    <option>{varient}</option>
                  ))}
                </select>
              </Col>
              <Col md={6}>
                <h6>Quantity</h6>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(10).keys()].map((v, i) => (
                    <option value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </Col>
            </Row>
          </div>
          <Row>
            <Col md={6} className="my-4">
              Price: ₹{poster.prices[0][varient] * quantity}
            </Col>
            <Col md={6} className="my-2">
              {" "}
              <Button variant="primary my-2" onClick={addToCartHandler}>
                Add to Cart
              </Button>
            </Col>
            {/* <a href="/" className="btn btn-primary my-2">Add to Cart</a> */}
          </Row>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{poster.name}</Modal.Title>
            </Modal.Header> 
            <Modal.Body>
                <div>
                <img
                    className="card-img-top img-fluid"
                    src={poster.image}
                    alt="..."
                  
                />
                </div>
                
                <h4 className="my-2">Description:</h4>
              {poster.description}
            </Modal.Body>
            
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Poster;

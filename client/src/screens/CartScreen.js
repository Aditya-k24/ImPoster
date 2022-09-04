import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { AiFillMinusCircle, AiFillPlusCircle ,AiOutlineDelete} from "react-icons/ai";
import { addToCart, deleteFromCart } from "../actions/cartActions";
import Checkout from "../components/Checkout";

const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;  
  const dispatch = useDispatch();
  const subTotal = cartItems.reduce((x,item)=> x + item.price,0)
  console.log(cartItems);
  return (
    <>
      <Container> 
        <Row>
          <Col md={7} className=" my-3">
            <h1>Cart Items</h1>
            <Row>
              {cartItems.map((item) => (
                <>
                  <Col md={6} className="my-2">
                    <h6>
                      {item.name} [{item.varient}]
                    </h6>
                    <h6>
                      {" "}
                      
                      Price : {item.quantity} x ₹{item.prices[0][item.varient]}{" "}
                      = ₹{item.price}
                    </h6>
                    <h6>
                      {" "}
                      Quantity :
                      <AiFillMinusCircle
                        className="mx-1"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity - 1, item.varient)
                          );
                        }}
                      />
                      {item.quantity}
                      <AiFillPlusCircle
                        className="mx-1"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity + 1, item.varient)
                          );
                        }}
                      />
                    </h6>
                  </Col>
                  <Col md={5} className="my-2">
                    <img
                      alt={item.name}
                      src={item.image}
                      style={{ width: "55px", height: "90px" }}
                    /><AiOutlineDelete className="mx-5 my-1" size = '20' 
                    style={{ cursor: "pointer" }}
                        onClick={() => {
                        dispatch(
                          deleteFromCart(item)
                        );
                      }}/>
                  </Col>
                 
                  <hr />
                </>
              ))}
            </Row>
          </Col>
          <Col md={4} className="mx-4 my-3">
            <h1>Payment Info</h1>
            <h4>Sub Total</h4>
            <h4> ₹{subTotal}/-</h4>
            <Checkout subTotal={subTotal}/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CartScreen;

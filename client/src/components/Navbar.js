import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from 'react-bootstrap/Dropdown';
import { logoutUser } from "../actions/userAction";

const Navbar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer)
  const {currentUser} = userState
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Image className="mx-3" src="images/logo.png" />
        <a className="navbar-brand " href="/">
          ImPoster
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link " href="/contact">
                Contact Us
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mx-3">
            {(currentUser) ? (
                <li className="nav-item">
                      
                    <Dropdown>
                    <Dropdown.Toggle className="nav-link " variant = "black"  id="dropdown-basic">
                        {currentUser.name}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/">Order</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{dispatch(logoutUser())}}>Logout</Dropdown.Item>
                        
                    </Dropdown.Menu>
                    </Dropdown>          
              </li>
            ) : (
            <>
                <li className="nav-item ">
                    <a className="nav-link " href="/register">
                    Register
                    </a>
                 </li>
                <li className="nav-item ">
                    <a className="nav-link " href="/login">
                     Login
                     </a>
                 </li>
            </>
            )}
            
            <li className="nav-item ">
              <a className="nav-link " href="/cart">
                <FiShoppingCart /> {cartState.cartItems.length}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

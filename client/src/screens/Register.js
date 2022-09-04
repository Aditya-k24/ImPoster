import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useDispatch,useSelector} from 'react-redux';
import {registerUser} from '../actions/userAction'
import Loader from "../components/Loader";
import Error from '../components/Error'
import Success from '../components/Success';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerState = useSelector(state => state.registerUserReducer)
  const {error,success,loading} = registerState;

  const dispatch = useDispatch();

  const registerHandler = async () => {
    if(password !== confirmPassword){
        alert("Password does not match")
    }
    else{
        const user = {name,email,password,confirmPassword}
       // console.log(user);
       await dispatch(registerUser(user));
        window.location.href = '/login';
    }
  }
  console.log("reached here");
  return (
    <>
    {loading && <Loader/>}    
    {success && <Success success="User Registered Successfully"/>}

    {error && <Error error="Something went wrong" />}
    

      <h1 className="text-center my-3">Registration Page</h1>
      <br />
      <Form className="container my-2">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" 
          placeholder="Enter Name"
          value={name}
          onChange={e=>setName(e.target.value)} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" 
          placeholder="Enter Email" 
          value={email}
          onChange={e=>setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" 
          placeholder="Password"
          value={password}
          onChange={e=>setPassword(e.target.value)} />
        </Form.Group>{" "}
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" 
          placeholder="Confirm Password" 
          value={confirmPassword}
          onChange={e=>setConfirmPassword(e.target.value)}/>
        </Form.Group>
        <Button variant="primary"
         
         onClick={registerHandler}>
          
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Register;

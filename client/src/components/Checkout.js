import React from 'react'
import {Button} from 'react-bootstrap/esm/Button'
import StripeCheckout from 'react-stripe-checkout'

const Checkout = ({subTotal}) => {
    const tokenHandler = (token) =>{
        console.log(token);
    }
  return (
    <StripeCheckout
    amount = {subTotal * 100}
    shippingAddress
    token={tokenHandler}
    stripeKey='pk_test_51Ldup1SHiej8LA75mgcQkdchXJm1zYvD57KAy8iKSIZAlECeu3jOLKmBmVJYo3NxRsh50dl47oNs9tiwQuAzDWgH00B5jKpSI3'
    currency='INR'
    >
        <Button>Pay Now</Button>
    </StripeCheckout>
  )
}

export default Checkout
//import {useDispatch} from 'react-redux'

//import { cartReducer } from "../reducers/cartReducer";

//const dispatch = useDispatch();
export const addToCart = (poster,quantity,varient) => (dispatch,getState) => {
    var cartItem ={
        name: poster.name,
        _id : poster._id,
        quantity: quantity,
        varient:varient, 
        image : poster.image,
        prices : poster.prices,
        price : poster.prices[0][varient] * quantity,

    };
    if( cartItem.quantity > 10 ){
        alert("Quantity beyond limit");
    }
    else if(cartItem.quantity < 1 ){
        dispatch({type:'DELETE_FROM_CART',payload:cartItem});

    }
    else{
        dispatch({type:'ADD_TO_CART',payload:cartItem});
    localStorage.setItem('cartItems',JSON.stringify(getState().cartReducer.cartItems))
    }
    
    

}

export const deleteFromCart  =(poster)=> (dispatch,getState) =>{
    dispatch({type:'DELETE_FROM_CART',payload:poster});
    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
}
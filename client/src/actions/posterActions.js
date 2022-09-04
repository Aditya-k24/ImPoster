import axios from "axios";

export const getAllPosters = () => async (dispatch) => {
    dispatch({type: 'GET_POSTERS_REQUEST'})
    try{
        const res = await axios.get('/api/posters/getAllPosters')
        console.log(res);
        dispatch({type: 'GET_POSTERS_SUCCESS' , payload : res.data})

    }catch(e){
        console.log(e);
        dispatch({type: 'GET_POSTERS_FAIL', payload : e})

    }
}
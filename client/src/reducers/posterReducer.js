export const getAllPosterReducer = (state = {posters:[]}, action) => {
    switch(action.type){
        case 'GET_POSTERS_REQUEST':
            return{
                ...state,
                loading : true
            };
         case 'GET_POSTERS_SUCCESS':
                return{
                    posters : action.payload,
                    loading:false
                };
         case 'GET_POSTERS_FAIL':
            return{
                error:action.payload,
                loading:false
 
            };
        default:
            return state;
    }
}
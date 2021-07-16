import * as type from '../types';

const initialState = {
    movies: [],
    loading:false,
    error:null
};

function movies(state = initialState , action){
    switch(action.type) {
        case type.GET_MOVIES_REQUESTED:
            return{
                ...state,
                loading:true,
            }
        case type.GET_MOVIES_SUCCESS:
            return{
                ...state,
                loading:false,
                movies: action.movies.results,
                
            }
        case type.GET_MOVIES_FAILED:
            return{
                ...state,
                loading:false,
                error:action.message,
            }
        default:
            return state;
    }
}

export default movies;
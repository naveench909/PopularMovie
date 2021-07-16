import { call , put , takeEvery } from 'redux-saga/effects'

const apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1';

function getApi () {
    return fetch(apiUrl , {
        method:'GET',
        headers: {
            'Content-Type' : 'application/json',
        }
    }).then(response => response.json())
      .catch((error) => {throw error})
}


//Generators
function* fetchMovies(action){
    try{
        const movies = yield call(getApi);
        yield put({type : 'GET_MOVIES_SUCCESS' , movies: movies });
    }catch(e){
        yield put({type : 'GET_MOVIES_FAILED' , message: e.message });
    }
} 

function* movieSaga() {
    yield takeEvery('GET_MOVIES_REQUESTED' , fetchMovies);
}

export default movieSaga;
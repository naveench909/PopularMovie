import { all } from 'redux-saga/effects';
import movieSaga from './movieSaga';

function* rootSaga(){
    yield all([
        movieSaga(),
    ])
} 

export default rootSaga;
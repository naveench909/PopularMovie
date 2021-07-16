import React , { useEffect} from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { getMovies } from '../redux/actions/movies';
import AllMovie from './AllMoviesComponent';

const Movies = () => {
    
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies.movies);
    const loading = useSelector(state => state.movies.loading);
    const error = useSelector(state => state.movies.error);
    
    useEffect(()=>{
        dispatch(getMovies()); 
    },[]);

    const Laoding = () =>{
        return(
            <div>
                <h2>Loading...</h2>
            </div>
        )
    }
    
    return (
        <>  
            {loading && <Laoding />}
            {movies.map((movie)=>{
                return(
                    <AllMovie movie={movie} key={movie.id}/>
                )
            })}
            {error && !loading && <p>{error}</p>}
        </>
    )
}

export default Movies;
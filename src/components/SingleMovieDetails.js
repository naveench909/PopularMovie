import React , { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'
const baseUrl = 'https://image.tmdb.org/t/p/w185';
const url = 'https://api.themoviedb.org/3/movie/'
const url2 = '?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US'

const SingleMovieDetials = () =>{
    const [movieDetails , setMovieDetails] = useState([]);
    const {id} = useParams();

    const getSingleMovieData = useEffect(()=>{
        async function fetchData(){
            try{
                const newUrl= `${url}${id}${url2}`;
                const response = await fetch(newUrl);
                const data = await response.json();
                const newData = [data];
                setMovieDetails(newData);
            }catch(e){
                console.log(e);
            }
        }
        fetchData();
    },[id]);

    return (      
        <div>
            {console.log(movieDetails)}
            {movieDetails.map((singleMovie , index)=>{
                let{original_title,release_date,overview,vote_average,poster_path,budget,revenue} = singleMovie;
                if(budget === 0){
                    budget = 200000;
                }
                if(revenue === 0){
                    revenue = 200000;
                }
                return(
                    <section key={index} className="singleMovieSection">
                        <h1 className="section-heading original-title">{original_title}</h1>
                        <div className="underline"></div>

                        <div className="single-movie">
                            <img className="single-movie-img"src={`${baseUrl}${poster_path}`} alt="movie-poster" />
                            <div className="single-movie-info">
                                <p>
                                    <span className="movie-data">Name :</span>{original_title}
                                </p>
                                <p>
                                    <span className="movie-data">Release Date :</span>{release_date}
                                </p>
                                <p>
                                    <span className="movie-data">Overview :</span>{overview}
                                </p>
                                <p>
                                    <span className="movie-data">Rating :</span>{vote_average}
                                </p>
                                <p>
                                    <span className="movie-data">Budget :</span>{budget}$
                                </p>
                                <p>
                                    <span className="movie-data">Revenue :</span>{revenue}$
                                </p>
                                
                            </div>
                        </div>
                        <Link className=" section-heading backhome-btn" to="/">BACK HOME</Link> 
                    </section>
                )
            })}
        </div>
    )
}

export default SingleMovieDetials;
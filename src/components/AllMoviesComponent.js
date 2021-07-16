import React from 'react';
import { Link } from 'react-router-dom'
import { AiOutlineHeart , AiTwotoneHeart } from 'react-icons/ai'
const baseUrl = 'https://image.tmdb.org/t/p/w185'; 

const getLocalStorage = () =>{
    const allFavMov = localStorage.getItem('allFavMov');
    if(allFavMov){
        return JSON.parse(localStorage.getItem('allFavMov'));
    }else{
        return [];
    }
}

const AllMovie = (props) => {
    const [isFav , setIsFav] = React.useState(false);
    const [allFavMov , setAllFavMov] = React.useState([]);

    const clickOnFavBtn = (id , x , name) => {

        setIsFav(x);
        if(x){
            const newFavMov = {id:id , value:x , name:name};
            setAllFavMov([...allFavMov , newFavMov]);
            console.log(allFavMov);
        }else{
            const newFavMovArr = allFavMov.filter((item)=>item.id !== id);
            setAllFavMov(newFavMovArr);
        }
    }



    // React.useEffect(()=>{
    //     localStorage.setItem('allFavMov' , JSON.stringify(allFavMov));   
    // },[allFavMov]);

    
    return (
        <div className="allmovie">
            {console.log(allFavMov)}
            <div className="all-movie-body">
                <div className="test">
                    <img className="movie-img" src={`${baseUrl}${props.movie.poster_path}`} alt="movie-poster" />
                    <div className="movie-info">
                        <h4 className="movie-name">{props.movie.title}</h4>
                        <div className="movie-btn">
                            <button className="btn preview">Preview</button>
                            <button onClick={()=>clickOnFavBtn(props.movie.id , !isFav , props.movie.original_title)} className=" fav">
                                {!isFav ? <AiOutlineHeart /> : <AiTwotoneHeart />}
                            </button>
                            <div className="details">
                                <button className="btn">
                                    <Link to={`/singlemovie/${props.movie.id}`}>Details</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllMovie;
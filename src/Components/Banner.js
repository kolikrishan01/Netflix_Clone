import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../axios'
import requests from '../request'
const Banner = () => {
    const [movie, setMoive] = useState([])

    const fetchData  = async () =>{
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMoive(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
       
    }
    useEffect(()=>{
        fetchData();
    },[])
    function truncate(str, n){
        return str?.length > n ? str.substr(0, n - 1) + "..." : str; 
    }

    
  return (
    <>
  
    <header className="banner"
    style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center-center",
    }}
    >
        <div className='banner__contents'> 
        <h1 className='banner__title'>
        { movie?.title || movie?.name || movie?.original_name }
        {/* {movie?.title} */}
        </h1>
     
        <div className='banner__buttons'>
            <button className='banner__button'>
                Play
            </button>
            <button className='banner__button'>
                My List
            </button>
        </div>
       
    
            <h1 className="banner__description">
            {truncate(movie?.overview, 150)}
            </h1>
    
        </div>
    
    </header>

    </>
  )
}

export default Banner

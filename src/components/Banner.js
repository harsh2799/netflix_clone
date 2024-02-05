import React from 'react'
import "../css/Banner.css"
import requests from '../Requests'
import instance from '../service/axios'
import {useState, useEffect} from 'react'

const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await instance.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;

        }
        
        fetchData();

    }, []);

    const truncate = (string, n) => {
        return string?.length > n ? string.substring(0, n-1) + '...' : string;
    }

  return (
    <header className='banner' style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}>
            <div className='banner_contents'>
                <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className='banner_description'>
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className='banner--fadeBottom' />
    </header>
  )
}

export default Banner
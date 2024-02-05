import {useState, useEffect} from 'react'
import "../css/Row.css"
import instance from '../service/axios'

const Row = ({title, fetchURL, isLargeRow = false}) => {

    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original";

    useEffect(() => {

        const fetchData = async () => {
            const request = await instance.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL])
    console.log(isLargeRow)
    console.log(movies)
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row_posters'>
            {
                movies.map((movie) => (
                    ((isLargeRow && movie.poster_path) ||
                    (!isLargeRow && movie.backdrop_path)) &&
                    (
                        <img 
                        key={movie.id}
                        className={`row_poster ${isLargeRow && "row_poster_large"}`}
                        src={`${base_url}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name} /> 
                    )
                )
            )}
        </div>
    </div>
  )
}

export default Row
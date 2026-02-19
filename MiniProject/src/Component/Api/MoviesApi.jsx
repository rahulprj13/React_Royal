import axios from 'axios'
import React, { useState } from 'react'

const MoviesApi = () => {

    const [movies, setMovies] = useState([])
    const getMovies = async () => {
        const res = await axios.get("https://www.omdbapi.com/?apikey=749ddc01&s=Avatar")
        console.log(res);
        console.log(res.data);
        console.log(res.data.Search);
        setMovies(res.data.Search);

    }
    return (
        <div>
            <h1>Movies Api</h1>
            <button onClick={getMovies}>get movies</button>
            {movies.length > 0 &&
                <table className='table'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>year</th>
                            <th>poster</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            movies.map((movie) => {
                                return (
                                    <tr key={movie.id}>
                                        <td>{movie.imdbID}</td>
<td>{movie.Title}</td>
                                        <td>{movie.Year}</td>
                                        <img src={movie.Poster}></img>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            }
        </div>
    )
}                                        

export default MoviesApi

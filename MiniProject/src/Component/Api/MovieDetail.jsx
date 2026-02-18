import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetail = () => {

  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();



    const fetchMovie = async() =>{
        const res = await axios.get(`https://www.omdbapi.com/?apikey=749ddc01&i=${id}`)
        setMovie(res.data)
    }

    if(!movie)
    {
        fetchMovie()
    }

    if (!movie) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }
  return (
    <div style={{ padding: "40px" }}>
        {/* <button onClick={() => window.history.back()}>Go Back</button> */}

        <button 
        onClick={() => navigate(-1)}
        style={{
          padding: "8px 15px",
          cursor: "pointer",
          marginBottom: "20px"
        }}
      >
         Go Back
      </button>
      <h1>{movie.Title}</h1>

      <img src={movie.Poster} alt={movie.Title} />

      <p><b>Year:</b> {movie.Year}</p>
      <p><b>Genre:</b> {movie.Genre}</p>
      <p><b>Actors:</b> {movie.Actors}</p>
      <p><b>Plot:</b> {movie.Plot}</p>
    </div>
  );
};

export default MovieDetail;
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MovieGrid = () => {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("avatar");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  // ✅ Simple async function
  const fetchMovies = async (moviename) => {

    if (search === "") {
      setMessage("Please enter movie name");
      setMovies([]);
      return;
    }

    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=749ddc01&s=${moviename}`
    );
    console.log(res.data);
    

    if (res.data.Response === "False") {
      setMessage("Movie not found...");
      setMovies([]);
    } else {
      setMovies(res.data.Search);
      setMessage("");
    }
  };

  if(movies.length === 0){
    fetchMovies(search)
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Movies</h2>

      {/* Input */}
      <input
        type="text"
        placeholder="Enter movie name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "10px", marginRight: "10px" }}
      />

      {/* Button */}
      <button onClick={()=>{fetchMovies(search)}} style={{ padding: "10px" }}>
        Search
      </button>

      {/* Message */}
      <h3 style={{ color: "red" }}>{message}</h3>

      {/* Movie Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {movies.map((movie) => (
          <div key={movie.id} style={{ textAlign: "center" }}>
            
            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ width: "200px", height: "300px" }}
            />

            <br />

            <button
              onClick={() => navigate(`/movie/${movie.imdbID}`)}
              style={{ marginTop: "10px" }}
            >
              View Detail
            </button>

          </div>
        ))}
      </div>

    </div>
  );
};

export default MovieGrid;
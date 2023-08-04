import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchurl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchurl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchurl]);

  const opts = {
    height: "390px",
    width: "100%",
    playerVars: {
      //https://developer.google.com/youtube/player_parameter
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      settrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          settrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onChange={() => handleClick(movie)}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${baseUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name ? movie.name : movie.original_title}
            ></img>
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;

import { AiTwotoneStar } from "react-icons/ai";
import { useState, useEffect } from "react";

export default function Box({ movie, theme }) {
  const [stars, setStars] = useState([]);
  const [desc, setDesc] = useState([]);
  const [rating, setRating] = useState([]);
  const dark = theme;

  const getRating = async () => {
    const url = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=a16bc3cf`;

    const response = await fetch(url);
    const data = await response.json();

    if (movie) {
      setStars(data.imdbRating);
      setDesc(data.Plot);
      setRating(data.Rated);
      console.log(data);
    }
  };

  useEffect(() => {
    getRating();
  }, [rating, desc, stars]);

  return (
    <div className={`movie-box ${dark ? "movie-box-dark" : "movie-box-light"}`}>
      <h1
        className={`movie-box--heading font-control-h4 semi-lora ${
          dark ? "movie-box--heading-dark" : "movie-box--heading-light"
        }`}
      >
        {movie.Title}
      </h1>
      <img
        className={`movie-box--poster ${
          dark ? "movie-box--poster-dark" : "movie-box--poster-light"
        }`}
        className="movie-box--poster"
        src={movie.Poster}
        alt="movie"
      ></img>
      <div
        className={`movie-box--rating ${
          dark ? "movie-box--rating-dark" : "movie-box--rating-light"
        }`}
      >
        <div>
          <AiTwotoneStar />
          {stars}
        </div>
        <div
          className={`movie-box--rating-rated ${
            dark
              ? "movie-box--rating-rated-dark"
              : "movie-box--rating-rated-light"
          }`}
        >
          {rating}
        </div>
      </div>
    </div>
  );
}

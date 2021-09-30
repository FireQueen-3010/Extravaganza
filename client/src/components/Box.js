import { AiTwotoneStar } from "react-icons/ai";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import Font from "./FontControl";

export default function Box({ movie, theme }) {
  const [stars, setStars] = useState([]);
  const [desc, setDesc] = useState([]);
  const [rating, setRating] = useState([]);
  const [movieData, setMovieData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const dark = theme;

  const getRating = async () => {
    const url = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=a16bc3cf`;

    const response = await fetch(url);
    const data = await response.json();

    if (movie) {
      setStars(data.imdbRating);
      setDesc(data.Plot);
      setRating(data.Rated);
      setMovieData(data);
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

      <a onClick={toggleModal}>
        <img
          className={`movie-box--poster ${
            dark ? "movie-box--poster-dark" : "movie-box--poster-light"
          }`}
          className="movie-box--poster"
          src={movie.Poster}
          alt="movie"
        ></img>
      </a>

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
      <div
        className={`movie-box--modal ${
          dark ? "movie-box--modal-dark" : "movie-box--modal-light"
        }`}
      >
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
          className={`modal-box ${
            dark ? "modal-box--dark" : "modal-box--light"
          }`}
        >
          <div className="modal--close">
            <button
              className={`modal--close-inside ${
                dark ? "modal--close-inside-dark" : "modal--close-inside-light"
              }`}
              onClick={toggleModal}
            >
              ✖
            </button>
          </div>
          <div className="modal--details">
            <div className="modal--details-heading">
              <Font
                theme={dark}
                text="Details "
                font="lato"
                size="semi-bold"
                type="h2"
                clr={dark ? "darkClr2" : "lightClr2"}
              />
            </div>
            <div className="modal--details-inside">
              <div className="modal--details-inside-1">
                <Font
                  theme={dark}
                  text="Title: "
                  font="lato"
                  size="regular"
                  type="h3"
                  clr={dark ? "darkClr1" : "lightBg"}
                />
                <Font
                  theme={dark}
                  text={movieData.Title}
                  font="lato"
                  size="regular"
                  type="h3"
                  clr={dark ? "darkClr1" : "lightBg"}
                />
              </div>
              <div className="modal--details-inside-2">
                <Font
                  theme={dark}
                  text="Released date: "
                  font="lato"
                  size="regular"
                  type="h3"
                  clr={dark ? "darkClr1" : "lightBg"}
                />
                <Font
                  theme={dark}
                  text={movieData.Released}
                  font="lato"
                  size="regular"
                  type="h3"
                  clr={dark ? "darkClr1" : "lightBg"}
                />
              </div>
              <div className="modal--details-inside-3">
                <Font
                  theme={dark}
                  text="Genre: "
                  font="lato"
                  size="regular"
                  type="h3"
                  clr={dark ? "darkClr1" : "lightBg"}
                />
                <Font
                  theme={dark}
                  text={movieData.Genre}
                  font="lato"
                  size="regular"
                  type="h3"
                  clr={dark ? "darkClr1" : "lightBg"}
                />
              </div>
              <div className="modal--details-inside-4">
                <Font
                  theme={dark}
                  text="Duration: "
                  font="lato"
                  size="regular"
                  type="h3"
                  clr={dark ? "darkClr1" : "lightBg"}
                />
                <Font
                  theme={dark}
                  text={movieData.Runtime}
                  font="lato"
                  size="regular"
                  type="h3"
                  clr={dark ? "darkClr1" : "lightBg"}
                />
              </div>
              <div className="modal--details-inside-5">
                <Font
                  theme={dark}
                  text="Language: "
                  font="lato"
                  size="regular"
                  type="h3"
                  clr={dark ? "darkClr1" : "lightBg"}
                />
                <Font
                  theme={dark}
                  text={movieData.Language}
                  font="lato"
                  size="regular"
                  type="h3"
                  clr={dark ? "darkClr1" : "lightBg"}
                />
              </div>
              <div className="modal--details-inside-6">
                <Font
                  theme={dark}
                  text="Storyline: "
                  font="lato"
                  size="regular"
                  type="h3"
                  clr={dark ? "darkClr1" : "lightBg"}
                />
                <Font
                  theme={dark}
                  text={movieData.Plot}
                  font="lato"
                  size="regular"
                  type="h3"
                  clr={dark ? "darkClr1" : "lightBg"}
                />
              </div>
              <div className="modal--details-inside-7">
                <Font
                  theme={dark}
                  text="Cast: "
                  font="lato"
                  size="regular"
                  type="h3"
                  clr={dark ? "darkClr1" : "lightBg"}
                />
                <Font
                  theme={dark}
                  text={movieData.Actors}
                  font="lato"
                  size="regular"
                  type="h3"
                  clr={dark ? "darkClr1" : "lightBg"}
                />
              </div>
              <div className="modal--details-inside-8">
                <Font
                  theme={dark}
                  text="Imdb Rating: "
                  font="lato"
                  size="regular"
                  type="h3"
                  clr={dark ? "darkClr1" : "lightBg"}
                />
                <Font
                  theme={dark}
                  text={movieData.imdbRating}
                  font="lato"
                  size="regular"
                  type="h3"
                  clr={dark ? "darkClr1" : "lightBg"}
                />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

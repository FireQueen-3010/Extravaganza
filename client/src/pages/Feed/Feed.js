import { useState, useEffect } from "react";
import Box from "../../components/Box";
import Search from "../../components/Search";

export default function Feed(props) {
  const [movieList, setMovieList] = useState([]);
  const [search, setSearch] = useState("");
  const dark = props.theme;

  const getMovie = async (search) => {
    if (search) var url = `http://www.omdbapi.com/?s=${search}&apikey=a16bc3cf`;
    else var url = `http://www.omdbapi.com/?s=star wars&apikey=a16bc3cf`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.Search) {
      setMovieList(data.Search);
    }
  };

  useEffect(() => {
    getMovie(search);
  }, [search]);

  return (
    <div className={`feed ${dark ? "feed-dark" : "feed-light"}`}>
      <Search search={search} setSearch={setSearch} />
      <div className="feed-container">
        {movieList.map((movie, index) => (
          <Box key={movie.imdbID} movie={movie} theme={dark} />
        ))}
      </div>
    </div>
  );
}

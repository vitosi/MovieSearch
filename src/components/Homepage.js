import React, { useState } from 'react';
import axios from 'axios';

function Homepage() {
  const [movie, setMovie] = useState('');
  const [movieList, setMovieList] = useState([]);

  function handleChange(e) {
    e.preventDefault();
    setMovie(e.target.value);
    console.log(movie);
  }

  async function movieResults(e) {
    e.preventDefault();
    try {
      const { data: results } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY.slice(
          1,
          -2
        )}&language=en-US&query=${movie}&page=1&include_adult=false`
      );
      console.log(results.results);
      setMovieList(results.results);
      console.log(movieList);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={movieResults}>
        <label>
          Movie:
          <input type="text" value={movie} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Homepage;

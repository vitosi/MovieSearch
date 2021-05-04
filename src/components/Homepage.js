import React, { useState } from 'react';
import axios from 'axios';

function Homepage() {
  const [movie, setMovie] = useState();
  const [movieList, setMovieList] = useState();

  async function movieResults() {
    try {
      const results = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY.slice(
          1,
          -2
        )}&language=en-US&query=spiderman&page=1&include_adult=false`
      );
      console.log(results);
      setMovieList(results);
      console.log(movieList);
    } catch (error) {
      console.log(error);
    }
  }

  return <button onClick={movieResults}>{'WORK'}</button>;
}

export default Homepage;

import React from 'react';

function MovieDisplay(props) {
  console.log(props);
  return props.movieInfo.map((movie) => {
    return (
      <div key={movie.id}>
        Title:{movie.title}
        Release Date: {movie.release_date}
        Description:{movie.overview}
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          width="100"
          height="200"
        />
      </div>
    );
  });
}

export default MovieDisplay;

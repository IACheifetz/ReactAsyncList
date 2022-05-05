import React from 'react';

export default function MovieList({ Movies }) {
  return <div className='movie-list'>
    { 
      Movies.map(Movie => 
        <div className="movie" key={Movie.Title + Movie.Director}>
          <h2>Movie Title: {Movie.Name}</h2>
          <h3>Released In: {Movie.ReleaseDate}</h3>
          <p>Directed By: {Movie.Director}</p>
          <p>Genre: {Movie.Genre}  </p>
        </div>
      )
    }

  </div>;
}
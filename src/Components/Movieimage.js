import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Movieimage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3004/users')
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch(err => console.log(err));
  }, []);

  const moviesByCategory = {};
  movies.forEach(users => {
    if (!moviesByCategory[users.category]) {
      moviesByCategory[users.category] = [];
    }
    moviesByCategory[users.category].push(users);
  });

  return (
    <div className='content'>
      {Object.keys(moviesByCategory).map(category => (
        <div key={category}>
          <h2>{category} </h2>
          <div className="movie-list">
            {moviesByCategory[category].map(users => (
              <Link to={`/Movie/${users.movieName}`} key={users.id} className="card">
                <img src={users.photoLink} alt={users.movieName} className="card-img-top" />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
export default Movieimage;
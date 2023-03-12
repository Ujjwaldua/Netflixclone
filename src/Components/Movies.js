import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3004/users')
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='movies'> 
    <div className="movies-list">
      {movies.map(users => (
        <Link to={`/Movie/${users.movieName}`} key={users.id} className="cards">
          <img src={users.photoLink} alt={users.movieName} className="card-img-top" />
          <div className="cards-body">
            <h4 className="card-title">{users.movieName}</h4>
          
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
}

export default Movies;

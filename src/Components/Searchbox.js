import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Searchbox() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3004/users')
      .then(res => res.json())
      .then(data => {
        setMovies(data);
        setFilteredMovies(data);
      })
      .catch(err => console.log(err));
  }, []);

  const filterMovies = (event) => {
    const filteredResults = movies.filter(users =>{return users.movieName.toLowerCase().includes(event.target.value.toLowerCase())});
    setFilteredMovies(filteredResults);
  }

  return (
    <div className='container my-5 py-5'>
      <input
        type='text'
        className='form-control mb-3'
        placeholder='Search for a movie...'
        onChange={(e)=>filterMovies(e)}
      />
      {filteredMovies.length > 0 ?
        <ul className='list-group'>
          {filteredMovies.map(users => (
            <Link to={`/movies/${users.id}`} key={users.id} className='list-group-item list-group-item-action'>
              {users.movieName}
            </Link>
          ))}
        </ul> :
        <p className='error'>No movies found!</p>
      }
    </div>
  );
}

export default Searchbox;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Addmovie() {
  const [movie, setMovie] = useState({
    movieName: '',
    video: '',
    photoLink: '',
    bigLink: '',
    category: '',
    rating: '',
    releaseDate: '',
    description: '',
  });
  const navigate= useNavigate();
  function handleChange(event) {
    const { name, value } = event.target;
    setMovie(prevMovie => ({ ...prevMovie, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/Home")
    fetch('http://localhost:3004/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movie),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
      
  }

  return (
    <div className='container'>
    <form className='forms' onSubmit={handleSubmit }>
      
      <input
        type="text"
        name="movieName"
        id="movieName"
        value={movie.movieName}
        onChange={handleChange}
        required
        placeholder='Please Enter Movie Name'
      />

<input
        type="url"
        name="video"
        id="video"
        value={movie.video}
        onChange={handleChange}
        required
        placeholder='Please Enter Movie URL'
      />

      
      <input
        type="url"
        name="photoLink"
        id="photoLink"
        value={movie.photoLink}
        onChange={handleChange}
        placeholder='Please Give Logo Link'
        required
      />

     
      <input
        type="url"
        name="bigLink"
        id="bigLink"
        value={movie.bigLink}
        placeholder='Please Give Banner Link'
        onChange={handleChange}
      />

     
<select
  name="category"
  id="category"
  value={movie.category}
  onChange={handleChange}
>
  <option value="">Select Movie category</option>
  <option value="Action">Action</option>
  <option value="Comedy">Comedy</option>
  <option value="Drama">Drama</option>
  <option value="Horror">Horror</option>
  <option value="Sci-Fi">Science Fiction</option>
</select>

   
      <input
        type="number"
        name="rating"
        id="rating"
        min="0"
        max="10"
        step="0.1"
        value={movie.rating}
        onChange={handleChange}
        placeholder='Please Enter Movie Ratings'
      />

     
      <input
        type="date"
        name="releaseDate"
        id="releaseDate"
        value={movie.releaseDate}
        onChange={handleChange}
        placeholder='Please Enter Movie Release Date'
      />

   
      <textarea
        name="description"
        id="description"
        value={movie.description}
        placeholder='Please Enter Movie Description'
        onChange={handleChange}
      />
<br></br>
      <button type="submit">Add Movie </button>
    </form>
    </div>
  );
}

export default Addmovie;
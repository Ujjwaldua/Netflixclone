import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

function Content() {
  const [movie, setMovie] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  
  const { movieName } = useParams();

  const playMovie = () => { 
    setIsPlaying(true);
   
  }

  const handleClick = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    fetch(`http://localhost:3004/users?movieName=${movieName}`)
      .then(res => res.json())
      .then(data => setMovie(data[0]))
      .catch(err => console.log(err));
  }, [movieName]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div  key={movie.id} className='movie-detal'   style={{ backgroundImage: `url(${movie.bigLink})`, backgroundSize: 'cover' }} >
        <div className="movie-info" >
          
          <h1 className="movie-title" >{movie.movieName} </h1>
          <p className="movie-description" onClick={handleClick}>{movie.description}</p>
          <button className="play-movie" onClick={playMovie}>Play Movie</button>
          
          </div>
        {isPlaying==true ? (
          <div className='playing'>
            <ReactPlayer url={movie.video} playing={isPlaying} controls={true} width={1200} height={600} onClick={handleClick} />
          </div>
        ) : null}
      </div>
     
    </>
  );
}

export default Content;

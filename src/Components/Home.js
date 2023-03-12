import React from 'react'
import "../App.css"
import Movieimage from './Movieimage'

function Home() {
  return (
   <>
  
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://fossbytes.com/wp-content/uploads/2021/02/A-poster-of-Harry-Potter-and-the-Goblet-of-Fire-Harry-Potter-movies-in-order.jpg" className="d-block w-100" alt="..." height= "500px"  />
    </div>
    <div className="carousel-item">
      <img src="https://www.denofgeek.com/wp-content/uploads/2023/02/Thunderbolts.jpg?resize=768%2C432" className="d-block w-100" alt="..." height= "500px" />
    </div>
    <div className="carousel-item">
      <img src="https://hbomax-images.warnermediacdn.com/images/GYEZmpgnTi7CgYgEAAAAV/tileburnedin?size=1280x720&partner=hbomaxcom&v=e078c08d9874c1b326ea7ae62fe55d49&host=art-gallery.api.hbo.com&language=en-us&w=1280" className="d-block w-100" alt="..."  height= "500px" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
<br></br><br></br> <br></br>
<Movieimage></Movieimage>



   </>
  )
}

export default Home
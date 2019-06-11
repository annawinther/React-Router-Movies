import React from 'react';
import { Link } from 'react-router-dom';



const SavedList = (props) => {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
        {
          (movie.title === "The Godfather")
          ?  <span className="saved-movie">Godfather</span>
          :
          (movie.title === "The Lord of the Rings: The Fellowship of the Ring")
          ?  <span key={movie.id} className="saved-movie">TLOTR</span>
          :     <span className="saved-movie">{movie.title}</span>

        }
        </Link>
       
      ))}
      <div className="home-button">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}


export default SavedList;
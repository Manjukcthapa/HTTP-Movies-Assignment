import React, { useState, useEffect } from "react";
import axios from "axios";
import './update.css';

const UpdateMovie = props => {
  const initialItem = {
    id: props.match.params.id,
    title: props.location.aboutProps.movie.title,
    director: props.location.aboutProps.movie.director,
    metascore:  props.location.aboutProps.movie.metascore
  };

  const [update, setUpdate] = useState(initialItem);
  const [stars, setStars] = useState(props.location.aboutProps.movie.stars);

  const changeHandler = e => {
    e.preventDefault();
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };

  const changeHandlerStar = e => {
    e.preventDefault();
    const stars = e.target.value.split(",");
    setStars(stars);
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/movies/${props.match.params.id}`, { ...update, stars})
      .catch(err => {
        console.log(err.response);
      });
    props.history.push("/");
  };

  return (
    <div>
      <h2 className="h2">Update Item</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div>
        <input className= "input"
          type="text"
          name="title"
          onChange={changeHandler}
          value={update.title}
        />
        </div>
        <div>
        <input className= "input"
          type="number"
          name="metascore"
          onChange={changeHandler}
          value={update.metascore}
        />
        </div>
        <div>
        <input className= "input"
          type="text"
          name="director"
          onChange={changeHandler}
          value={update.director}
        />
        </div>
        <div>
        <input className= "input"
          type="text"
          name="stars"
          onChange={changeHandlerStar}
          value={stars}
        />
        </div>
        <button className="button">Update Movie</button>
      </form>
    </div>
  );
};

export default UpdateMovie;

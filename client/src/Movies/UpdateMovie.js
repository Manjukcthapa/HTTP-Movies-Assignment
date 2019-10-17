import React, {useState} from "react";
import axios from "axios";

const UpdateMovie = () => {
  const initialItem = {
    id: props.match.params.id,
    title: "",
    director: "",
    metascore: "",
    stars: ""
  };

  const [stars, setStars] = useState([]);
  const [update, setUpdate] = useState(initialItem);

  const handleChange = (e) => {
    e.preventDefault();
    setUpdate({...update, [e.target.name]: e.target.value })

  }
  const changeHandlerStars = e => {
    e.preventDefault();
    setStars({...stars, [e.target.name]: [e.target.value] })
}
const data={
    ...update,
    ...stars
}

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .put(`http://localhost:5000/api/movies/${props.match.params.id}`, data )
    .catch(err => {
        console.log(err.response)
    })
    props.history.push('/')
    window.location.href = window.location.href
  }


  return (
    <div>
      <form submit={handleSubmit}>
        <input
          type="text"
          name="title"
          unchanged={handleChange}
          value={update.title}
        />
        <input
          type="text"
          name="director"
          unchanged={handleChange}
          value={update.directtor}
        />
        <input
          type="number"
          name="metascore"
          onChange={handleChange}
          value={update.metascore}
        />

        <input
          type="array"
          name="stars"
          onChange={changeHandlerStars}
          value={update.stars}
        />
        <button>Update Movie</button>
      </form>
    </div>
  );
};

export default UpdateMovie;

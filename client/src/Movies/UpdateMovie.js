import React from "react";

const UpdateMovie = () => {
    const initialItem = {
        id:'',
        title:'',
        director:'',
        metascore:'',
        stars:''
    }
   const [stars, setStars] = useState([]);
   const[update, setUpdate] = useState(initialItem )

  return (
  <div>
      <form>
          <input 
          type='text'
          name='title'
          unchanged={handelChange}
          value={'update.title'}
          />
          <input
           type='text'
           name='director'
           unchanged={handelChange}
           value='update.directtor'/>
          <input
          type="number"
          name="metascore"
          onChange={changeHandler}
          value={update.metascore}/>

          <input
           type="number"
           name="metascore"
           onChange={changeHandler}
           value={update.stars}/>
        
      </form>

  </div>)
};

export default UpdateMovie;

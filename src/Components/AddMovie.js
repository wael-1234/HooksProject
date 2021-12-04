import { useState } from "react";

const AddMovie=({addNewMovie})=>{
    const [movie, setMovie] = useState({
        Title: "",
        Description:"",
        Rate: 1,
        Affiche: null,
      });
      
      const handleChange = (e) => {
        setMovie({ ...movie, [e.target.name]: e.target.value });
      };

    return(
      <div> 
        <input  
          type="text"
          placeholder="Title of the movie"
          name="Title"
          onChange={handleChange}
          value={movie.Title}>
        </input>
        <input  
          type="text"
          placeholder="About the movie"
          name="Description"
          onChange={handleChange}
          value={movie.Description}>
        </input>
        <input  
          type={"number"}
          placeholder="Rate of the Movie"
          name="Rate"
          max="5"
          min="1"
          onChange={handleChange}
          value={movie.Rate}>
        </input>
        <input  
          type="text"
          placeholder="Affiche of the Movie"
          name="Affiche"
          onChange={handleChange}
          value={movie.Affiche}>
        </input>               
        <input  
          type="submit"
          value="Add movie"
          onClick={() => addNewMovie(movie)}
          >
        </input>               
      </div>
    );
  
  }

export default AddMovie
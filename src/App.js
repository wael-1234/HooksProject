import React from 'react';
import { useState } from 'react';
import "./App.css"
import AddMovie from './Components/AddMovie';
import Filter from './Components/Filter';
import MovieList from "./Components/MovieList"
import Imagealaddin from "./Pictures/aladdin.png"
import Imageaquarela from "./Pictures/aquarela.png"
import Imagedarkphoenix from "./Pictures/darkphoenix.png"
import ImageFrozen2 from "./Pictures/frozen2.png"


export default function App() {
 
  const [movies,setMovies]= useState([
    {
      Title:"  ALADDIN" ,
      Description:"Aladdin est un Film d'aventures fantastique américain coécrit et réalisé par Guy Ritchie et sorti en 20191..",
      Rate: "4",
      Image:Imagealaddin,
    },
    {
      Title:"  AQUARELA" ,
      Description:"Aquarela est un voyage spectaculaire à travers la beauté fascinante de l’Eau,l’élément le plus précieux de la Terre..",
      Rate: "2",
      Image:Imageaquarela,
    },
    {
    Title:"  DARK PHOENIX" ,
    Description:"Au cours d'une mission de sauvetage dans l'espace, Jean Grey frôle la mort, frappée par une mystérieuse force cosmique..",
    Rate:"5" ,
    Image:Imagedarkphoenix,
    },
    {
      Title:"  FROZEN II" ,
      Description:"Pourquoi Elsa est-elle née avec des pouvoirs magiques ? La jeune fille rêve de l’apprendre, mais la réponse met son royaume en danger.",
      Rate:"3" ,
      Image:ImageFrozen2
    },
  ])

const [show,setShow]= useState(false);

const addNewMovie = newMovie => {
  setMovies([newMovie, ...movies])
}

const [keyWord,setKeyWord]=useState("");
const handleChange=(x)=>{
  setKeyWord(x);
   };

    return (
      <div style={{textAlign:'center'}}>
        <h1 style={{fontSize:'70px',textAlign:'center'}}>MOVIE LIST</h1>
        <Filter handleChange={handleChange}/>
        <button  style={{marginTop:'20px'}}onClick={()=>setShow(true)}> Add New Movie</button>
        {show&&<AddMovie addNewMovie={addNewMovie}/>}
         <MovieList movies={movies.filter(el=>el.Title.toUpperCase().includes(keyWord.toUpperCase()))}/>    
      </div>
    )
  };



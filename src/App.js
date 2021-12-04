import React from 'react';
import { useState } from 'react';
import AddMovie from './Components/AddMovie';
import Filter from './Components/Filter';
import MovieList from "./Components/MovieList"
import Imagealaddin from "./Pictures/aladdin.png"
import Imageaquarela from "./Pictures/aquarela.png"
import Imagedarkphoenix from "./Pictures/darkphoenix.png"
import ImageFrozen2 from "./Pictures/frozen2.png"
import Imagegoodboys from "./Pictures/goodboys.png"
import Imageshaft from "./Pictures/shaft.png"


export default function App() {
  const [movies,setMovies]= useState([
    {
      Title:"aladdin" ,
      Description:"Aladdin est un Film d'aventures fantastique américain coécrit et réalisé par Guy Ritchie et sorti en 20191..",
      Rate: "4",
      Image:Imagealaddin,
    },
    {
      Title:"aquarela" ,
      Description:"Aquarela est un voyage spectaculaire à travers la beauté fascinante de l’Eau,l’élément le plus précieux de la Terre..",
      Rate: "2",
      Image:Imageaquarela,
    },
    {
    Title:"darkphoenix" ,
    Description:"Au cours d'une mission de sauvetage dans l'espace, Jean Grey frôle la mort, frappée par une mystérieuse force cosmique..",
    Rate:"5" ,
    Image:Imagedarkphoenix,
    },
    {
      Title:"Frozen2" ,
      Description:"Pourquoi Elsa est-elle née avec des pouvoirs magiques ? La jeune fille rêve de l’apprendre, mais la réponse met son royaume en danger.",
      Rate:"3" ,
      Image:ImageFrozen2
    },
   


  ])
const [show,setShow]= useState(false);

const addNewMovie = newMovie => {
  setMovies([newMovie, ...movies])
}

    return (
      <div>
        <div>MOVIE LIST</div>
        <MovieList/>
        <addNewMovie/>
        <Filter movies={movies}/>
        <button onClick={()=>setShow(true)}> Add New Movie</button>
        {show&&<AddMovie addNewMovie={addNewMovie}/>}
      </div>
    )
  };



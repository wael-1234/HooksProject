import React from 'react';
import Rate1 from "../RatePictures/Rate1.png";
import Rate2 from "../RatePictures/Rate2.png";
import Rate3 from "../RatePictures/Rate3.png";
import Rate4 from "../RatePictures/Rate4.png";
import Rate5 from "../RatePictures/Rate5.png";
import placeholder from "../placeholder.jpg"
import "./Movie.css";



export default function MovieCard({movie}){
    const RateSwitch=(n)=>{
        switch (n) {
          case "1": return Rate1
          case "2": return Rate2
          case "3": return Rate3
          case "4": return Rate4
          case "5": return Rate5   
        }
    }
     return(
            <div className="BoxOffice">
             <h1> Title: {movie.Title}</h1>
             <h3> Description: {movie.Description}</h3>
             <img src={movie.Image || placeholder}/>
             <img src={RateSwitch(movie.Rate)} width='200px'/>
            </div>
        )
   
};
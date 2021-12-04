import React from 'react';
import "./Movie.css";
import MovieCard from './MovieCard';

export default function MovieList({movies}){
        return(
            <div >
                {
                    movies.map(movie => <MovieCard key={movie.Title} movie={movie}/>)
                }
            { /*<MovieCard 
            Title="aladdin" 
            Description="Aladdin est un Film d'aventures
             fantastique américain coécrit et réalisé 
             par Guy Ritchie et sorti en 20191.."
            Rate="7" 
            Image={Imagealaddin}
            />
            <MovieCard 
            Title="aquarela" 
            Description="Aquarela est un voyage spectaculaire
             à travers la beauté fascinante de l’Eau,
             l’élément le plus précieux de la Terre.."
            Rate="4" 
            Image={Imageaquarela}
            />
            <MovieCard 
            Title="darkphoenix" 
            Description="Au cours d'une mission de sauvetage
             dans l'espace, Jean Grey frôle la mort,
              frappée par une mystérieuse force cosmique.."
            Rate="5" 
            Image={Imagedarkphoenix}
            />
            <MovieCard 
            Title="Frozen2" 
            Description="Pourquoi Elsa est-elle née avec des pouvoirs
             magiques ? La jeune fille rêve de l’apprendre,
             mais la réponse met son royaume en danger."
            Rate="6" 
            Image={ImageFrozen2}
            />
            <MovieCard 
            Title="goodboys" 
            Description="près avoir été invités à leur première fête,
             Max, Thor et Lucas, 12 ans, paniquent complètement parce
              qu’ils ne savent pas comment embrasser."
            Rate="3" 
            Image={Imagegoodboys}
            />
            <MovieCard 
            Title="shaft" 
            Description="Le légendaire détective revient dans la vie 
            de son fils, expert en cybersécurité au FBI, pour 
            enquêter sur la mort d'un ami."
            Rate="6" 
            Image={Imageshaft}
            />           */}
            </div>
        )
    };
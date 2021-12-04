import React from "react";
import { useState} from "react";


export default function Filter(movies) {

    const [filteredMovie,setfilteredMovie]=useState(movies);
    const [searchvalue,setsearchvalue]=useState('');

     const handlchange=(e)=>{
         setsearchvalue(e);
         filterMovie(e);
    };

    const filterMovie=(e)=>{
        const lowerCaseValue=e.toLowerCase().trim();
        if (lowerCaseValue){
            setfilteredMovie=filteredMovie.filter(item=>{
                return Object.keys(item).some(key=>{
                    item[key].toString().toLowerCase(lowerCaseValue);
                })
            })
        }
    };

    return (
        <div>
             <input  
                 type="search"
                 placeholder="Filter by Title"
                 name="Title"
                 value="keyWord"
                 onChange={e=>{handlchange(e)}}>
            </input>
            {filterMovie&&<span>No movies found</span>}
        
        </div>
    )
        };

   

    



import React, {useState, useEffect} from "react";
import axios from "axios";
import PostCard from "./PostCard";
import InfoCard from "./InfoCard"


const NasaList = () => {
    const [state, setState] = useState ({});
    
    useEffect ( 
                () => 
                axios
                .get("https://api.nasa.gov/planetary/apod?api_key=4Fzpq6RywH8RjUtir6EiJFcUTWJZuiCbUcLng44u")
                .then(response => setState(response.data)) 
                .catch (error => console.log("dude...this is bad", error))
                , []);
   
            return(
                <div>
                <PostCard src ={state.hdurl} title={state.title}/>
                <InfoCard title={state.title} date={state.date} explanation={state.explanation} />
                </div>
        
            );
     }

export default NasaList;














































// import React , { useEffect, useState } from "react";
// import {Card} from "./Card"
// import axios from 'axios'




// const NasaList = () => {
// const [list, setList] = useState({}); 
  
//     useEffect ( 
//         () => 
//         axios
//         .get("https://api.nasa.gov/planetary/apod?api_key=jkzqGqDOQqhQ1R6qipeIk5IbaSQbu0RZflP4dvE2")
//         .then(response => setList(response.data))
//         .catch(error=>console.log("dude...this is bad", error))
//         , [])
//     return(
//         <div>
//         <Card title={list.title} explanation={list.explanation} url={list.url} media_type={list.media_type}/>


//         </div>

//     )
//         };

// export default NasaList




        {/*  this was commented // <div className="cardWrapper">
        // <h1>{list.title}</h1>
        // <p>{list.explanation}</p>
        // <img src={list.url}alt="nasa of the day"/>
        // </div>  to here */}
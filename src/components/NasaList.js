import React, {useEffect, useState} from 'react';
import axios from 'axios'




const NasaList = () => {
const [list, setList] = useState({}); 
    useEffect ( 
        () => 
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=jkzqGqDOQqhQ1R6qipeIk5IbaSQbu0RZflP4dvE2")
        .then(response =>{
                console.log(response)
                setList(response)
            
            .catch(error=>(
                console.log("dude...this is bad", error)
            )), []
    }

      
};

export default NasaList
import React from "react";



const InfoCard = (props) => {
  
        return (
          <div className="infoCard">
            <p>{`Nasa photo du jur: ${props.date}`}</p> 
            <p>{`Title: ${props.title}`}</p>
            <p>Description: {props.explanation}</p>
        </div>
    )
}

export default InfoCard; 

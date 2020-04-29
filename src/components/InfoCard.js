import React from "react";



const InfoCard = (props) => {
        return (
<div className="infoCard">
    <p>
    Nasa photo du jur: {props.date} 
    Title: {props.title}
    Description: {props.explanation} 
    </p>
</div>
    )
}

export default InfoCard; 

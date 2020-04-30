import React from 'react';



const PostCard = (props) => {
    return (
        <div className="postCard">
            <img src={props.src} alt={props.title}/>
        </div>
    )
}

export default PostCard; 











































// import React from "react"
// import NasaList from  "./NasaList"


// export const Card = (props)=>{

// {if (props.media_type == "video" ){


//     return (
//         <div className="cardWrapper">
//             <h1>{props.title}</h1>
//             <img src={props.url} alt="nasa pic of the day"/>
//             <iframe width="420" src={props.url} title="nasa video of the day"/>
//             <p>{props.explanation}</p>
//         </div>
//     )
    
    
// } }






// else if (props.media_type == "img"){
// return(
//     <div className="cardWrapper">
//     <h1>{props.title}</h1>
//     <img src={props.url} alt="nasa pic of the day"/>
//     <p>{props.explanation}</p>
// </div>
// )
// }
// }
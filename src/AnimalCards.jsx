import React from "react";
import mycss from './Cards.module.css'

const AnimalCard = (props) =>{
    return(
<div className={mycss.cardContainer}>
    <div className={mycss.imagetop}>
        <span onClick = {props.CloseMe}>&#10060;</span>
        <img src={`https://source.unsplash.com/500x400/?${props.name}`} alt={props.name}  />
    </div>
    <div>
        <div><h3>{props.name}</h3></div>
        <div className={mycss.likeSection}>
            {/* <span >{props.likes}</span> */}

             {props.children}
        </div>
        

    </div>
</div>
    );
}
export default AnimalCard ;
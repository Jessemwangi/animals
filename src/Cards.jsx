import React from "react";
import mycss from './Cards.module.css'

const AnimalCard = (props) =>{
    return(
<div className={mycss.cardContainer}>
    <div className="imagetop">
        <span onClick = {props.CloseMe}>&#10060;</span>
        <img src={`https://source.unsplash.com/500x400/?${props.name}`} alt="" srcset="" />
    </div>
    <div>
        <div><h3>{props.name}</h3></div>
        <div>
            <span >&#10083;{props.likes}</span>
            <button onClick = {props.cliked}> {props.children}</button>
        </div>
        

    </div>
</div>
    );
}
export default AnimalCard ;
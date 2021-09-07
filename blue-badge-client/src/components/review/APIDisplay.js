import { useState, useEffect } from "react";
import APISearch from "./APISearch";
const divStyles={
  textAlign: 'left',
  color: 'lightgray',
}

const displayFunction = (props) => {

  return(
    <div style={divStyles}>
      <h1>{props.title}</h1>
      <img src={props.imageUrl} width='100%' alt='Game image displaying soon'/>
      <p><strong>Metacritic Rating:</strong> {props.meta}/100</p>
      <p><strong>Release Date:</strong> {props.release}</p>
      <div><strong>Platforms:</strong> {props.plat}</div>
      <br/>
      <p><strong>Developers:</strong> {props.dev}</p>
      <div><strong>Desctiption:</strong> {props.des} </div>
      
    </div>
  )
}

export default displayFunction;
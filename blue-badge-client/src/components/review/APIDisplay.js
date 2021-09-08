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
      <img src={props.imageUrl} width='100%'/>
      <p>{props.meta}</p>
      <p>{props.release}</p>
      <div>{props.plat}</div>
      <br/>
      <p>{props.dev}</p>
      <div>{props.des} </div>
      
    </div>
  )
}

export default displayFunction;
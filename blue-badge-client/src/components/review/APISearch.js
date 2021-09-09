import React, {useState, useEffect, createElement} from 'react';
import {Button, Input, Form, FormGroup} from 'reactstrap';
import APIDisplay from "./APIDisplay"
const inputStyle={
  fontFamily: "Review Font",
  height: "100px", 
  fontSize: "50px",
}


const APISearch = () => {
  const [search, setSearch] = useState('');
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [meta, setMeta] = useState('');
  const [release, setRelease] = useState('');
  const [plat, setPlat] = useState([]);
  const [dev, setDev] = useState('');
  const [des, setDes] = useState('');
  const [det, setDet] = useState([]);
  
  
  const handleSubmit = () => {
    const key = "7be848dcee5a4cd490fdd79ddd68ea9d";
    // e.preventDefault();
    fetch(`https://api.rawg.io/api/games/${search.replace(/\s/g , "-")}?key=${key}`)
    .then(res => {
      if(res.ok){
        return res.json()
      } else if(res.staus === 404){
        return Promise.reject('error 404')
      } else {
        return Promise.reject("Error:" + res.status)
      }
    })
    .then( data => {
      console.log(data)
      setTitle(data.name);
      setImageUrl(data.background_image);
      setMeta("Metacritic Rating: " + data.metacritic + "/100");
      setRelease("Release Date: " + data.released);
      setPlat("Platforms: " + data.platforms.map(platName => platName.platform.name).join(', '));
      setDev("Developers: " + data.developers[0].name);
      setDes("Description: " + data.description_raw);
    }).catch(err => {
      setDet("Not Found!! ")
      alert("Howdy Partner, something is wrong on our end! Don't worry though just try something else")
      console.log(det)
    })
    setDet('')
  }
  
    const searchAndClear = () => {
      handleSubmit();
    setSearch('')
  }

  const clearRender = () => {
    window.location.reload(false);
  }

  return(
    <div className="api-search-main">
      <br/>
      <h2 style={{"fontFamily": "Review Font Two", "color": "#FFC107", fontSize: "45px", textDecoration: "underline"}}>Mega Games Database</h2>
      <Input style={inputStyle} name="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search For Games"/>
      <br/>
      <Button className="searchBtn" onClick={searchAndClear} style={{"color": "black"}} color="warning">Search Database</Button>
      <Button className="clearBtn" onClick={clearRender} style={{"color": "black"}} color="warning">Clear</Button>
      {det == '' ? <APIDisplay title={title} imageUrl={imageUrl} meta={meta} release={release} plat={plat} dev={dev} des={des} /> :
      <APIDisplay det={det} />}
      </div>
)
}
  
export default APISearch;
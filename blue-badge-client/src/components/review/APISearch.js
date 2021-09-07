import React, {useState, useEffect} from 'react';
import {Button, Input, Label} from 'reactstrap';
import APIDisplay from "./APIDisplay"
const divStyles={fontFamily: "impact"}

const APISearch = () => {
  const [search, setSearch] = useState('');
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [meta, setMeta] = useState('');
  const [release, setRelease] = useState('');
  const [plat, setPlat] = useState([]);
  const [dev, setDev] = useState('');
  const [des, setDes] = useState('');
  
  const handleSubmit = () => {
    const key = "7be848dcee5a4cd490fdd79ddd68ea9d";
    fetch(`https://api.rawg.io/api/games/${search.replace(/\s/g , "-")}?key=${key}`)
    .then(res => res.json())
    .then( data => {
      setTitle(data.name);
      setImageUrl(data.background_image);
      setMeta(data.metacritic);
      setRelease(data.released);
      setPlat(data.platforms.map(platName => platName.platform.name));
      setDev(data.developers[0].name);
      setDes(data.description_raw);
    })
  }
  
  return(
    <div className="api-search-main">
      <h2>Mega Games Database</h2>
      <Input name="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search For Games"/>
      <br/>
      <Button onClick={handleSubmit}>Search Database</Button>
      <APIDisplay title={title} imageUrl={imageUrl} meta={meta} release={release} plat={plat.join(', ')} dev={dev} des={des}/>
    </div>
  )
}


export default APISearch;
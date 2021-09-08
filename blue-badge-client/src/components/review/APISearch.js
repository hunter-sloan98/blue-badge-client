import React, {useState, useEffect} from 'react';
import {Button, Input, Label} from 'reactstrap';

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
    }).catch(err => {
      console.log(err)
    })
  }
  
  useEffect(() => {
    handleSubmit();
  }, []);

  return(
    <div className="api-search-main">
      <br/>
      <Input name="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search For Games"/>
      <br/>
      <Button onClick={handleSubmit}>Search Database</Button>
      <h1>{title}</h1>
      <img src={imageUrl} width='100%' alt='Game image displaying soon'/>
      <p><strong>Metacritic Rating:</strong> {meta}/100</p>
      <p><strong>Release Date:</strong> {release}</p>
      <div><strong>Platforms:</strong> {plat.join(', ')}</div>
      <br/>
      <p><strong>Developers:</strong> {dev}</p>
      <div><strong>Desctiption:</strong> {des} </div>
    </div>
  )
}

export default APISearch;
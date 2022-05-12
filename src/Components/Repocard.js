import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./styles/Repocard.css"

function Repocard({currentrep}) {
  const [languages,setLanguages] = useState();
  useEffect(() => {
    const fetchlang = async() => {
      const res = await axios.get(currentrep.languages_url);
      setLanguages(res.data);
    }

    fetchlang()
  },[])
  
  var results = languages && Object.keys(languages).map((key) => key);
  
  
  return (
    <div className='border border-dark repocard_container'>
        <h2 className='reponame'>{currentrep.name}</h2>
        {currentrep.description ? <p className='desc'>{currentrep.description}</p> : <p className='desc'>Description doesn't excist for this repo</p>}
        <div className='langs'>
            {
              results && results.map(result => (
                <button className='btn btn-primary'>{result}</button>
              ))
            }
        </div>
    </div>
  )
}

export default Repocard

import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./styles/SearchComponent.css"

function SearchComponent() {
  const[username,setUsername] = useState("")
  const navigate = useNavigate();
  
  const handlesubmit = async(e) => {
    e.preventDefault();
    navigate(`/home/${username}`)
  }

  return (
    <form onSubmit={handlesubmit} className="container d-flex flex-column w-50 justify-content-center align-items-center searchcomp">
        <input type="text" className='form-outline px-2 py-2 mb-3 w-50' placeholder='Enter username' value={username} onChange={(e) => {setUsername(e.target.value)}}/>
        <button type="submit" className='btn btn-primary w-25'>Search</button>
    </form>
  )
}

export default SearchComponent

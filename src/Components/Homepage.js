import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./styles/Homepage.css"
import UserDetailsComponent from './UserDetailsComponent';
import ClipLoader from "react-spinners/ClipLoader";
import RepositoryList from './RepositoryList'
import {IoLink} from 'react-icons/io5'


function Homepage() {
  const [loading,setLoading] = useState(false);
  const [details,setDetails] = useState();
  const {username} = useParams();
  const link = `https://api.github.com/users/${username}`;

  useEffect(() => {
    
    setLoading(true);
    const fetchdetails = async() => {
        var config = {
          method: 'get',
          url: `https://api.github.com/users/${username}`,
          headers: { 
            'Authorization': 'Bearer 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'
          }
        };
        const res = await axios(config).then(function (response) {
         setDetails(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
        setLoading(false);
    }

    setTimeout(() => {
      fetchdetails()
    },3000)
  },[])


  
 
  if(loading){
    return <div className='homepage_loading'>
      <ClipLoader color={"black"} loading={loading} size={50}  />
    </div>
  }


  return (
    <div className='homepage_container'>
        <div className='homepage_userdetails'>
            {details && <UserDetailsComponent details={details} username={username}/>}
        </div>
        <div className='px-5 py-2 links'>
          <IoLink/>
          <p className='lnk' >{link}</p>
        </div>
        <div className='homepage_repositoryList'>
          {details && <RepositoryList repourl={details.repos_url}/>}
        </div>
    </div>
  )
}

export default Homepage

import React from 'react'
import "./styles/UserDetailsComponent.css"
import {IoLocationSharp} from "react-icons/io5"

function UserDetailsComponent({details,username}) {

  return (
    <div className='userdetails_container'>
          <div className='userdetails_profile'>
              <div className='userdetails_outercircle'>
                  <div className='userdetails_circle'>
                     {details.avatar_url ? <img src={details.avatar_url} className='avatar'/> : <p>Image</p>}
                  </div>
              </div>
          </div>
          
          <div className='userdetails_bio'>
              <h1>{details.name}</h1>
              <p className='userdetails_desc'>{details.bio}</p>
              <div className='userdetails_desc'>
                  <div><IoLocationSharp/></div>
                  <p>{details.location}</p>
              </div>
              <p className='userdetails_desc'>Twitter: https:twitter.com/{details.twitter_username}</p>
          </div>
    </div>
  )
}

export default UserDetailsComponent

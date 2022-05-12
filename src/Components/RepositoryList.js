import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pagination from './Pagination';
import Repocard from './Repocard';
import "./styles/RepositoryList.css"
import ClipLoader from "react-spinners/ClipLoader";


const RepositoryList = ({repourl}) => {
  const [repos,setRepos] = useState();
  const [currentrepos,setCurrentrepos] = useState(1)
  const[reposcount,setReposcount] = useState();
  const[loading,setLoading] = useState(false)


  useEffect(() => {
    async function getrepos(){
      if(currentrepos > 1)setLoading(true)
      const res = await axios.get(`https://fyleserver.herokuapp.com/repos?url=${repourl}&page=${currentrepos}`);
      setRepos(res.data.results);
      setReposcount(res.data.total)
      repos && setLoading(false)
    }

    getrepos()

   
  },[currentrepos])

  if(loading) return <div className="loader"><ClipLoader color={"black"} loading={loading} size={50}  /></div>

  return (
    <div className='repo_container'>
      <div className='repolists'>
      {
        repos && repos.map(currentrep => (
          <Repocard currentrep={currentrep}/>
        ))
      }
      </div>
      <div>
        {repos && <Pagination totalrepos={reposcount} setCurrentrepos={setCurrentrepos}/>}
      </div>
    </div>
  )
}

export default RepositoryList

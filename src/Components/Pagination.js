import React from 'react'

const Pagination = ({totalrepos,setCurrentrepos}) => {
  const pageNumbers = [];

  for(let i=1;i<=Math.ceil(totalrepos/6);i++){
      pageNumbers.push(i);
  }

  return (
    <nav>
        <ul className='pagination'>
            {pageNumbers.map(number => (
                <li key={number} className="page-item">
                    <a href='#' className='page-link' onClick={() => setCurrentrepos(number)}>{number}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination

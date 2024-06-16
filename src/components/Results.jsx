import React from 'react'

const Results = ( {results}) => {
  return (
    <div className='flex gap-8 flex-col'>
      {results.map((result)=>(
        <div key={result.id}>
            <h2>{result.original_title}</h2>
            <p>{result.overview}</p>
            
        </div>
      ))}
    </div>
  )
}

export default Results

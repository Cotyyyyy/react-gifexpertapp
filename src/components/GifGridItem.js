import React from 'react'

export const GifGridItem = ({ id,downsized_medium,title}) => {
    return (<>
        <div className='card'>

        <img src={downsized_medium} alt={title}></img>
  <p>{title}</p>
  
        </div>
  </>
  )
}

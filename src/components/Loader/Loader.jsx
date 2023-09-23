//create the simple styled-component loader component
import React from 'react'
import "./Loader.scss"

function Loader() {
  return (
    <div className='loader-container'>
        <div className="loader-div">
          <div className="circle-spin">
            <div className="spinner"></div>
          </div>
            <p className="loader">
                processing...
            </p>
        </div>
    </div>
  )
}

export default Loader
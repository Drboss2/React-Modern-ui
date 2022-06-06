import React from 'react'
import './possibility.css'
import possibilityImg  from '../../assets/possibility.png'

function possibility() {
  return (
    <div className='gpt3__possiblity section__padding' id='possibility'>
      <div className='gpt3__possiblity-image'>
        <img src={possibilityImg} alt='img' />
      </div>
      <div className="gpt3__possiblity-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default possibility
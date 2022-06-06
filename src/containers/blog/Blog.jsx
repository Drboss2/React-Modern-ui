import React from 'react'
import './blog.css'
import { Acticle } from '../../components'
import {blog01,blog02,blog03,blog04,blog05} from '../../components/acticle'

function Blog() {
  return (
    <div className='gpt3__blog section__padding' id="blog">
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, 
       We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
         <div className='gpt3__block-container-groupA'>
            <Acticle imgUrl={blog01} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is'/>
         </div>
         <div className='gpt3__block-container-groupB'>
            <Acticle imgUrl={blog02} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
            <Acticle imgUrl={blog03} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
            <Acticle imgUrl={blog04} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
            <Acticle imgUrl={blog05} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
         </div>
      </div>
    </div>
  )
}

export default Blog
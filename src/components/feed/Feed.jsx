import React from 'react'
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';
import {Posts} from '../../dummyData';
export default function feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {Posts.map((data)=>(
            <Post key={data.id} post={data}/>
          ))}
      </div>
    </div>
  )
}

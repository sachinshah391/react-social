import React,{useState} from 'react';
import './post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from '../../dummyData';

export default function Post({post}) {
  const [like, setlike] = useState(post?.like);
  const [isliked, setIsLiked] = useState(false);
  const rootURL=process.env.REACT_APP_PUBLIC_FOLDER;


  const likeHandler = () => {
    // if(isliked){
    //   setlike(like - 1);
    //   setIsLiked(false);
    // }
    // else{
    //   setlike(like+1);
    //   setIsLiked(true);;
    // }
    isliked ? setlike(like - 1) : setlike(like + 1);
    setIsLiked(!isliked);
  }

  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
                <span className="postUsername">Safak Kocka</span>
                <span className="postDate">{post?.date}</span>
              </div>
              <div className="postTopRight">
                <MoreVertIcon/>
              </div>
            </div>
            <div className="postCenter">
              <span className="postText">{post?.desc}</span>
              <img src={rootURL+post?.photo} alt="" className="postImg" />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img className='likeIcon' src={`${rootURL}like.png`} alt="" onClick={likeHandler}/>
                <img className='likeIcon' src={`${rootURL}heart.png`} alt="" onClick={likeHandler} />
                <span className="postLikeCounter">{like} people like it</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText">{post?.comment} comment</span>
              </div>
            </div>
        </div>
    </div>
  )
}

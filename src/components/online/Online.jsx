import React from 'react';
import './online.css';

export default function Online({Users}) {
  const rootURL=process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={rootURL+Users?.profilePicture} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{Users?.username}</span>
    </li>
  )
}

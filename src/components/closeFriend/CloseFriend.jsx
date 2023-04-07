import React from 'react';
import './closeFriend.css';

export default function CloseFriend({Users}) {
  const rootURL=process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
        <img src={rootURL+Users.profilePicture} alt="" className="sidebarFriendImg" />
        <span className="sidebarFriendName">{Users.username}</span>
  </li>
  )
}

import React from 'react';
import './profile.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';

export default function Profile() {
  const rootURL=process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
        <Topbar/>
      <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img src={`${rootURL}post/3.jpeg`} alt="" className="profileCoverImg" />
                    <img src={`${rootURL}person/7.jpeg`} alt="" className="profileUserImg" />

                </div>
                <div className="profileInfo">
                    <h4 className='profileInfoName'>Safak Kockagglu</h4>
                    <span className='profileInfoDesc'>Hello my Friends!</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed/>
                <Rightbar profile/>
            </div>
        </div>
      </div>
    </div>
  )
}

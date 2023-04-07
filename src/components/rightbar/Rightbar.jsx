import React from 'react';
import './rightbar.css';
import {Users} from '../../dummyData';
import Online from '../online/Online';

export default function rightbar({profile}) {
  const rootURL=process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightBar=()=>{
    return (
      <>
        <div className="birthdayContainer">
            <img src="/assets/gift.png" alt="" className="birthdayImg" />
            <span className="birthdayText">
              <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
            </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((userData)=>(
            <Online key={userData.id} Users={userData}/>
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightBar=()=>{
    return(
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInforKey">City:</span>
            <span className="rightbarInforValye">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInforKey">From:</span>
            <span className="rightbarInforValye">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInforKey">Relationship:</span>
            <span className="rightbarInforValye">Single</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInforKey"></span>
            <span className="rightbarInforValye"></span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={`${rootURL}person/1.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${rootURL}person/2.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${rootURL}person/3.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${rootURL}person/4.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${rootURL}person/5.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${rootURL}person/6.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${rootURL}person/7.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${rootURL}person/8.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${rootURL}person/9.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? ProfileRightBar(): HomeRightBar()}
        
      </div>
    </div>
  )
}

import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MypostsContainer from "./Myposts/MypostsContainer";
import cls from './Profile.module.css'


const Profile = (props) => {

    return (

        <div className={cls.profile}>
            <ProfileInfo isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         saveProfile={props.saveProfile}
                         updateStatus={props.updateStatus}/>
            <MypostsContainer isOwner={props.isOwner}
                              profilePosts={props.profile}/>
        </div>
    );
};

export default Profile;
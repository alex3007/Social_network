import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MypostsContainer from "./Myposts/MypostsContainer";
import cls from './Profile.module.css'


const Profile = (props) => {

    return (

        <div className={cls.profile}>
            <ProfileInfo savePhoto={props.savePhoto}
                         isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         saveProfile={props.saveProfile}
                         updateStatus={props.updateStatus}/>
            <MypostsContainer />
        </div>
    );
};

export default Profile;
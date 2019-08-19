import React from 'react';
import cls from './Profile.module.css';
import Myposts from './Myposts/Myposts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
    return (

        <div>
            <ProfileInfo />
            <Myposts posts={props.state.posts} />

        </div>
    );
}
export default Profile;
import React from 'react';
import cls from './FriendsPage.module.css';
import friend from "../../../assets/images/friend.jpg";


const FriendsPage = (props) => {
    let item = <div className={cls.userCard}>
        <div className={cls.userInfo}>
            <div className={cls.userImage}>
                <img src={friend} className={cls.userPhoto}/>
            </div>
            <div className={cls.userName}>
                <p>FriendName</p>
            </div>
        </div>
    </div>
    return (
        <div className={cls.container}>
            {item}{item}{item}{item}{item}{item}
        </div>

    );
};
export default FriendsPage;
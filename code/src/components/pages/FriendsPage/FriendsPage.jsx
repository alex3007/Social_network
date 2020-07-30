import React from 'react';
import cls from './FriendsPage.module.css';
import friend from "../../../assets/images/friend.jpg";

const FriendsPage = (props) => {
    let item = <div>
        <img src={friend}/>
        <h3>FriendName</h3>
    </div>
    return (
        <div className={cls.container}>
            {item}{item}{item}
        </div>

    );
};
export default FriendsPage;
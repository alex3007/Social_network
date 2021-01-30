
import React from 'react';
import {NavLink} from "react-router-dom";
import cls from "./User.module.css";
import userPhoto from "../../assets/images/friend.jpg";


let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={cls.userCard}>
            <div className={cls.userInfo}>
                <div className={cls.userData}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={userPhoto}
                             className={cls.userPhoto}/>
                    </NavLink>
                    <span>
                        <div><p><b>Name:</b><br/> {user.profile.fullName}</p></div>
                    </span>
                </div>
                <div className={cls.buttonArea}>
                    {user.followed
                        ? <button className={cls.userBtn} disabled={followingInProgress
                            .some(id => id === user.id)}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}>
                            Unfollow</button>
                        : <button className={cls.userBtn} disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>
                            Follow</button>}
                </div>
            </div>
        </div>
    )
};

export default User;

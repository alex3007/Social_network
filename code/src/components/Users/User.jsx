import React from 'react';
import {NavLink} from "react-router-dom";
import cls from "./User.module.css";
import userPhoto from "../../assets/images/friend.jpg";


let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={cls.userContainer}>
                <span className={cls.flexContainer}>
                    <div>
                       <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={cls.userPhoto}/>
                       </NavLink>
                    </div>
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
                </span>
            <span>
                    <span>
                        <div><p><b>Name:</b> {user.name}</p></div>
                        <div><p>{user.status}</p></div>
                    </span>
                    <span>
                        <div><p><b>Country:</b> {"user.location.country"}</p></div>
                        <div><p><b>City:</b> {"user.location.city"}</p></div>
                    </span>
                </span>
        </div>)
};

export default User;

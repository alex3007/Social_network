import React from 'react';
import {NavLink} from "react-router-dom";
import cls from "./User.module.css";
import userMale from "../../assets/images/male.png";
import userFemale from "../../assets/images/female.png";


let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={cls.userCard}>
            <div className={cls.userInfo}>
                <NavLink to={'/profile/' + user.id}
                         className={cls.userData}>
                    {user.profile.male ?
                        <img src={userMale} className={cls.userPhoto}/> :
                        <img src={userFemale} className={cls.userPhoto}/>
                    }
                    <span>
                        <br/>
                        <p><b>{user.profile.fullName}</b></p>
                        </span>
                </NavLink>
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

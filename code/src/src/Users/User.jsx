import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./User.module.css";
import userPhoto from "../Assets/images/friend.jpg";


let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
       <div>
                <span>
                    <div>
                       <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={styles.userPhoto}/>
                       </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress
                                .some(id => id === user.id)}
                                      onClick={() => { unfollow(user.id) }}>
                                Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => { follow(user.id) }}>
                                      Follow</button>}

                    </div>
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

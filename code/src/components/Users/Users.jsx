import React from 'react';
import User from "./User";
import cls from './User.module.css'

let Users = (props) => {
    return <div className={cls.container}>
        <div className={cls.usersContainer}>
            <div className={cls.users}>
                {
                    props.friends === 'visible' ?
                        props.users.map(u => {
                                if (u.followed === true) {
                                    return <User user={u}
                                                 followingInProgress={props.followingInProgress}
                                                 key={u.id}
                                                 unfollow={props.unfollow}
                                                 follow={props.follow}
                                    />
                                } else return
                            }
                        ) : props.users.map(u => <User user={u}
                                                       followingInProgress={props.followingInProgress}
                                                       key={u.id}
                                                       unfollow={props.unfollow}
                                                       follow={props.follow}
                        />
                        )
                }
            </div>
        </div>
    </div>
};

export default Users;







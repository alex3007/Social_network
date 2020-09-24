import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import cls from './User.module.css'

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
    return <div className={cls.container}>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount} pageSize={pageSize}/>
        <div className={cls.usersContainer}>
        <div className={cls.users}>
            {
                users.map(u => <User user={u}
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







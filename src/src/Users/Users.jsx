import React from 'react';
import * as axios from 'axios';
import userPhoto from '../Assets/images/friend.jpg';
import cls from './Users.module.css'


const Users = (props) => {


    let pagesCount = Math.ceil(props.totalUserCount/props.pageSize);

    let pages = [];

    for ( let  i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

        return <div>

            <div>
                {pages.map( p=>{
                    return <span className={props.currentPage === p && cls.thisPage}
                                 onClick={(e) => { props.onPageChanged(p); }}>{p}</span>}
                )}

            </div>

            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                       <img src={u.photos.small != null ? u.photos.small : userPhoto} className={cls.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.Name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
}

export default Users;
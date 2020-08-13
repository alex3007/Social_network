import React from 'react';
import cls from './Post.module.css';
import friend from '../../../../assets/images/friend.jpg';

const Post = (props) => {

    return (
        <div className={cls.postItems}>
            <div className={cls.item}>

                <img src={friend} alt="avatar"/>

                {props.message}
            </div>
            <p><i className='fa fa-heart'/>{props.likesCount}</p>
        </div>
    );
};
export default Post;
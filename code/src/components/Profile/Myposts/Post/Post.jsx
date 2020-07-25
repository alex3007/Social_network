import React from 'react';
import cls from './Post.module.css';
import friend from '../../../../assets/images/friend.jpg';

const Post = (props) => {

        return (

        <div className={cls.item}>

            <img src={friend} alt="avatar"/>

            {props.message}
            <p>likes:{props.likesCount}</p>
        </div>
    );
    };
    export default Post;
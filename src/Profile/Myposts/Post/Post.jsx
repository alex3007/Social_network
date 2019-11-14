import React from 'react';
import cls from './Post.module.css';
const Post = (props) => {

        return (

        <div className={cls.item}>

            <img src="../../../../friend.jpg" alt="avatar" ></img>

            {props.message}
            <p>likes:{props.likesCount}</p>
        </div>
    );
    }
    export default Post;
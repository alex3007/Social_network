import React from 'react';
import cls from './Post.module.css';
const Post = (props) => {

        return (

        <div className={cls.item}>

            <img src="https://wallbox.ru/wallpapers/main/201316/a27d648b57a2ebb.jpg" ></img>

            {props.message}
            <p>likes:{props.likesCount}</p>
        </div>
    );
    }
    export default Post;
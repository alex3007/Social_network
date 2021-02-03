import React from 'react';
import cls from './Post.module.css';

const Post = (props) => {

    return (
        <div className={cls.postItems}>
            <div className={cls.item}>
                <p><i className='fa fa-heart'/>{props.likesCount}</p>
                {props.message}
            </div>
        </div>
    );
};
export default Post;
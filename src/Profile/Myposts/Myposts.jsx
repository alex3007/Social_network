import React from 'react';
import cls from './Myposts.module.css';
import Post from './Post/Post';

const Myposts = (props) => {


    let postElements = props.posts
        .map( message => <Post message={message.message} likesCount={message.likesCount} />)


    return (

        <div className={cls.postsBlock}><h3> My posts</h3>
            <div>
                <textarea className={cls.textArea}></textarea>
                <button className={cls.buttonAddPost}>Add post</button>

            </div>
            <div>
                {postElements}

            </div>
        </div>
    );
}
export default Myposts;
import React from 'react';
import cls from './Myposts.module.css';
import Post from './Post/Post';
import {addPostActionCreator,updateNewPostTextActionCreator} from '../.././Redux/Store';


const Myposts = (props) => {

    let postElements = props.posts
        .map( message => <Post message={message.message} likesCount={message.likesCount} />)

    let newPostElement  = React.createRef();

    let addPost =() =>{
        let text = newPostElement.current.value;
        props.dispatch( addPostActionCreator());
          }
    let onPostChange =() =>{
        let text = newPostElement.current.value;
        props.dispatch( updateNewPostTextActionCreator(text));
    }


    return (

        <div className={cls.postsBlock}><h3> My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} className={cls.textArea}></textarea>
                <button onClick={addPost} className={cls.buttonAddPost}>Add post</button>

            </div>
            <div>
                {postElements}
            </div>
        </div>
    );
}
export default Myposts;

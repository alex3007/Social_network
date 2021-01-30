import React from 'react';
import cls from './VideoPage.module.css';
import video from "../../../assets/images/video.png";



const VideoPage = (props) => {
    let item = <div className={cls.userCard}>
        <div className={cls.userInfo}>
            <div className={cls.userImage}>
                <img src={video} className={cls.userPhoto}/>
            </div>
            <div className={cls.userName}>
                <p>Video</p>
            </div>
        </div>
    </div>
    return (
        <div className={cls.container}>
            {item}{item}{item}{item}{item}{item}
        </div>

    );
};
export default VideoPage;
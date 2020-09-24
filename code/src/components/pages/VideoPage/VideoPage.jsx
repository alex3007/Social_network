import React from 'react';
import cls from './VideoPage.module.css';
import video from "../../../assets/images/video.png";

const VideoPage = (props) => {
    let item = <div className={cls.item}>
               <img src={video}/>
                <h3>VideoTitle</h3>
               </div>
    return (
        <div className={cls.container}>
            {item}{item}{item}
        </div>

    );
};
export default VideoPage;
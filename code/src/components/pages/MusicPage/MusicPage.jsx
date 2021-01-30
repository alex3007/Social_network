import React from 'react';
import cls from './MusicPage.module.css';
import music from "../../../assets/images/music.png";



const MusicPage = (props) => {
    let item = <div className={cls.userCard}>
        <div className={cls.userInfo}>
            <div className={cls.userImage}>
                <img src={music} className={cls.userPhoto}/>
            </div>
            <div className={cls.userName}>
                <p>Track</p>
            </div>
        </div>
    </div>
    return (
        <div className={cls.container}>
            {item}{item}{item}{item}{item}{item}
        </div>

    );
};
export default MusicPage;
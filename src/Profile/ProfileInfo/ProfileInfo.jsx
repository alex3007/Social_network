import React from 'react';
import cls from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (

        <div className={cls.content}>
            <div className={cls.image_container}>
            <img className={cls.content_image} src="./grass.jpg"></img>
            </div>
            <div className={cls.description} >
                <img src="./me.jpg"></img>
                <p>Name</p>
            </div>
        </div>
    );
}
export default ProfileInfo;
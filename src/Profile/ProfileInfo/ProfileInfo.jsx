import React from 'react';
import cls from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (

        <div className={cls.content}>
            <img className={cls.content_image} src="./waterfall.jpg"></img>
            <div className={cls.description} >
                ava+description
            </div>
        </div>
    );
}
export default ProfileInfo;
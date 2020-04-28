import React from 'react';
import cls from './ProfileInfo.module.css';
import myphoto from '../../Assets/images/myphoto.jpg';
import titlephoto from '../../Assets/images/titlephoto.jpg';

const ProfileInfo = () => {
    return (

        <div className={cls.content}>
            <div className={cls.image_container}>
            <img className={cls.content_image} src= {titlephoto}/>
            </div>
            <div className={cls.description} >
                <img src={myphoto}/>
                <p>Name</p>
            </div>
        </div>
    );
}
export default ProfileInfo;
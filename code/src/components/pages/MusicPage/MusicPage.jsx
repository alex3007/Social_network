import React from 'react';
import cls from './MusicPage.module.css';
import music from "../../../assets/images/music.png";

const MusicPage = (props) => {
    let item = <div>
        <img src={music}/>
        <h3>TreckTitle</h3>
    </div>
    return (
        <div className={cls.container}>
            {item}{item}{item}
        </div>

    );
};
export default MusicPage;
import React from 'react';
import cls from './NewsPage.module.css';
import news from "../../../assets/images/news.jpg";

const NewsPage = (props) => {
    let item = <div>
        <img src={news}/>
        <h3>NewsTitle</h3>
    </div>
    return (
        <div className={cls.container}>
            {item}{item}{item}
        </div>
    );
};
export default NewsPage;
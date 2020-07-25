import React from 'react';
import preloader from "../../../assets/preloaders/spinning-circles.svg";

let Preloader = (props) => {
    return <div style={
        {
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'flex',
            backgroundColor: 'rgba(255, 255, 255, 0.7)'
        }}>
        <img style={{margin: 'auto'}} src={preloader}/>
    </div>
};

export default Preloader;
import React from 'react';
import preloader from "../../Assets/preloaders/spinning-circles.svg";

let Preloader = (props) => {
    return <div  style={ {display: 'flex', height:'200px'} }>
        <img style={ {margin: 'auto'} } src={preloader} />
    </div>
};

export default Preloader;
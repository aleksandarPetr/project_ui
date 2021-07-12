import React from 'react';

import './Main.css';

import MainText from './MainText';
import MainImage from './MainImage';

const Main = () => {
    return (
        <div className="main">
            <MainText />
            <MainImage />
        </div>
    )
}

export default Main
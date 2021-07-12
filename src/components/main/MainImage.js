import React from 'react';
import mainPhoto from '../../assets/mainPhoto.svg';

import './Main.css'

const MainImage = () => {
    return (
        <div className="mainRight">
            <img src={mainPhoto} alt="mainPhoto"/>
        </div>
    )
}

export default MainImage
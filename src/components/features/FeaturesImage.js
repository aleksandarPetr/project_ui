import React from 'react';

import './Features.css';

const FeaturesImage = (props) => {
    return (
        <div className="featuresSectionLeft">
            <img src={props.details.image} alt="Dashboard"/>
        </div>
    )
}

export default FeaturesImage
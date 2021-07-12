import React from 'react';

import './Features.css';

const FeaturesText = (props) => {
    return (
        <div className="featuresSectionRight">
            <h2 className="featuresSubtitle">{props.details.subtitle}</h2>
            <h3 className="featuresDescription">{props.details.description}</h3>
            <p>{props.details.text}</p>
        </div>
    )
}

export default FeaturesText
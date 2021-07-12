import React from 'react';

import Dashboard from '../../assets/Dashboard.svg';
import Illustration from '../../assets/Illustration.png';
import Typography from '../../assets/Typography.png';

import FeaturesImage from './FeaturesImage';
import FeaturesText from './FeaturesText';

import './Features.css';

const FeaturesSection = () => {

    const featuresData = [
        {
            image: {Dashboard},
            subtitle: 'Designing Dashboards',
            description: 'Dashboard',
            text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },
        {
            image: {Illustration},
            subtitle: 'Vibrant Portraits of 2020',
            description: 'Illustration',
            text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },
        {
            image: {Typography},
            subtitle: '36 Days of Malayalam type',
            description: 'Typography',
            text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },
    ]

    return (

        <div className="featuresSection">
            {(featuresData || []).map((feature, index) => {
                console.log(feature, index)
                return (
                    <div className="featuresChapter">
                    <div className="featuresSectionChapter">
                        <FeaturesImage details={feature} />
                        <FeaturesText details={feature} />
                    </div>
                        <hr />
                    </div>
                )
            })}
        </div>



    )


}

export default FeaturesSection
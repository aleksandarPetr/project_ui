import React from 'react';

import fb from '../../assets/fb.svg';
import Instagram from '../../assets/Instagram.svg';
import twitter from '../../assets/twitter.svg';
import LinkedIn from '../../assets/LinkedIn.svg';

import './Footer.css'

const FooterSocial = () => {
    return (
        <div className="footerSocial">
            <img src={fb} alt="Facebook"/>
            <img src={Instagram} alt="Instagram"/>
            <img src={twitter} alt="Twitter"/>
            <img src={LinkedIn} alt="LinkedIn"/>
        </div>
    )
}

export default FooterSocial
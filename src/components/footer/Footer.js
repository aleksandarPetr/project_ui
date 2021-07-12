import React from 'react';
import FooterSocial from "./FooterSocial";
import FooterCopyright from "./FooterCopyright";

import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <FooterSocial />
            <FooterCopyright />
        </div>
    )
}

export default Footer
import React from "react";
import { ReactComponent as InstaLogo } from '../assets/Instagram_Glyph_Black.svg';
import { ReactComponent as GitLogo } from '../assets/github-mark.svg';
import { ReactComponent as LiLogo } from '../assets/icons8-linkedin.svg';
import { ReactComponent as XLogo } from '../assets/x_logo.svg';
import { openInNewTab } from '../utils/Methods.js';

export default function SocialMedia() {

    return (
        <div className='Section-Default Social-Media'>
        <div onClick={() => openInNewTab('https://www.instagram.com/rjain90')} style={{cursor:"pointer"}}>
            <InstaLogo fill='white' style={{width:'100px', height: '100px'}}/>
        </div>
        <div onClick={() => openInNewTab('https://github.com/rishabh-jain-1990')} style={{cursor:"pointer"}}>
            <GitLogo fill='white' style={{width:'100px', height: '100px'}}/>
        </div>
        <div onClick={() => openInNewTab('https://www.linkedin.com/in/rjain90')} style={{cursor:"pointer"}}>
            <LiLogo fill='white' style={{width:'100px', height: '100px'}}/>
        </div>
        <div onClick={() => openInNewTab('https://twitter.com/rjain90')} style={{cursor:"pointer"}}>
            <XLogo fill='white' style={{width:'100px', height: '100px'}}/>
        </div>
        </div>
    );
}
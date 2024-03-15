import React from "react";
import default_logo from '../assets/Logo_Blue_White_BG.png';
import bs_logo from '../assets/Bowstring Studio - Logo - Box White copy.png';

export default function WorkExperience() {
    return (
        <div className="Section-Default Work-Experience" >
          <div className="Education-Item" style={{flex: 2}}> 
          <div>
            <h1 style={{ color: 'var(--primary-dark)'}}>Default</h1>
            <h2 style={{ color: 'var(--primary-dark)', marginTop: '10px'}}>Co Founder & CTO, 2019 - Current</h2>
            </div>
            <div>
            <h1 style={{ color: 'var(--primary-dark)'}}>Bowstring Studio</h1>
            <h2 style={{ color: 'var(--primary-dark)', marginTop: '10px'}}>Co Founder & Mobile Lead, 2013 - 2019</h2>
            </div>
        </div>
        <div className="Education-Item" style={{flex: 1, alignItems:'flex-end', marginRight:'5%'}}> 
          <img src={default_logo} style={{width:'80%'}}/>
          <img src={bs_logo} style={{width:'80%'}}/>
        </div>
         </div>
      );
}
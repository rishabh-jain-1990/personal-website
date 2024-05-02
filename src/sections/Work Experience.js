import React from "react";
import default_logo from '../assets/Logo_Blue_White_BG.png';
import bs_logo from '../assets/Bowstring Studio - Logo - Box White copy.png';

export default function WorkExperience() {
    return (
        <div className="Section-Default Work-Experience">
          <h1 style={{ color: 'var(--primary-dark)', marginTop:'5%',}}>Work Experience</h1>

          <div className="Education-Item" style={{flexDirection:"row", justifyContent:'space-between', width:'100%', marginTop:'10%', display: 'flex', alignItems:'center', flexWrap:'wrap'}}> 
            <div style={{flexDirection:"column", display: 'flex', marginLeft:'5%'}}>
              <h1 style={{ color: 'var(--primary-dark)'}}>Default</h1>
              <h2 style={{ color: 'var(--primary-dark)', marginTop: '10px'}}>Co Founder & CTO, 2019 - Current</h2>
            </div>
            <img src={default_logo} style={{ width:'300px', display: 'flex', marginRight:'5%'}}
            alt="Default Logo"/>
          </div>
          <div className="Education-Item" style={{flexDirection:"row", width:'100%', justifyContent:'space-between', marginTop:'10%', display: 'flex', alignItems:'center', flexWrap:'wrap'}}> 
            <div style={{flexDirection:"column", display: 'flex', marginLeft:'5%'}}>
              <h1 style={{ color: 'var(--primary-dark)'}}>Bowstring Studio</h1>
              <h2 style={{ color: 'var(--primary-dark)', marginTop: '10px'}}>Co Founder & Mobile Lead, 2013 - 2019</h2>
            </div>
            <img src={bs_logo} style={{ width:'300px', display: 'flex', marginRight:'5%'}}
            alt="Bowstring Studio Logo"/>
          </div>
         </div>
      );
}
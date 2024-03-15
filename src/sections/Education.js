import React from "react";
import ncl_logo from '../assets/png-transparent-newcastle-university-hd-logo.png';
import jiit_logo from '../assets/jiit-logo.png';

export default function Education() {
    return (
        <div className="Section-Default Education">
          <div className="Education-Item" style={{flex: 2}}> 
            <h1 style={{ color: 'var(--primary-dark)',  }}>Newcastle University, UK</h1>
            <h2 style={{ color: 'var(--primary-dark)', marginTop:'10px', marginBottom:'10%'}}>B. Eng., Electronics & Computer Engineering, 2009 - 2011</h2>

            <h1 style={{ color: 'var(--primary-dark)', marginTop:'10%' }}>Jaypee Institue of Information Technology, JIIT</h1>
            <h2 style={{ color: 'var(--primary-dark)', marginTop:'10px'}}>B. Tech., Computer Science Engineering, 2008 - 2009</h2>
        </div>
        <div className="Education-Item" style={{flex: 1, alignItems:'flex-end', marginRight:'5%'}}> 
          <img src={ncl_logo} style={{width:'80%', marginBottom:'15%'}}/>
          <img src={jiit_logo} style={{width:'30%', marginTop:'10%'}}/>
        </div>
         </div>
      );
}
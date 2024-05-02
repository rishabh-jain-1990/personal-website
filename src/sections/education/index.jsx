import React from "react";
import ncl_logo from '../../assets/png-transparent-newcastle-university-hd-logo.png';
import jiit_logo from '../../assets/jiit-logo.png';
import "./index.css"
import "../../App.css"

export default function Education() {
  return (
    <div className="Section-Default education">
      <h1 style={{ color: 'white', marginTop:'5%', }}>Education</h1>

      <div className="education-item" > 
        <div style={{flexDirection:"column", display: 'flex', marginLeft:'5%'}}>
          <h1 style={{ color: 'white'}}>Newcastle University, UK</h1>
          <h2 style={{ color: 'var(--secondary-darker)', marginTop: '10px'}}>B. Eng, Electronics and Computer Science, 2009 - 2011</h2>
        </div>
        <img src={ncl_logo} style={{ width:'300px', display: 'flex', marginRight:'5%'}} 
            alt="Newcastle University Logo"/>
      </div>
      <div className="education-item"> 
        <div style={{flexDirection:"column", display: 'flex', marginLeft:'5%'}}>
          <h1 style={{ color: 'white'}}>Jaypee Institue of Information Technology, JIIT</h1>
          <h2 style={{ color: 'var(--secondary-darker)', marginTop: '10px'}}>B. Tech, Computer Science Engineering, 2008 - 2009</h2>
        </div>
        <img src={jiit_logo} style={{ width:'150px', display: 'flex', marginRight:'5%'}}
            alt="Jaypee Institute of Information Technology Logo"/>
      </div>
     </div>
  );
}
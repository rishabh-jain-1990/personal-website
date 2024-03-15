import React from "react";
import ncl_logo from '../assets/png-transparent-newcastle-university-hd-logo.png';
import jiit_logo from '../assets/jiit-logo.png';

export default function Education() {
  return (
    <div className="Section-Default Education">
      <h1 style={{ color: 'var(--primary-dark)', marginTop:'5%',}}>Education</h1>

      <div className="Education-Item" style={{flexDirection:"row", justifyContent:'space-between', width:'100%', marginTop:'10%', display: 'flex', alignItems:'center', flexWrap:'wrap'}}> 
        <div style={{flexDirection:"column", display: 'flex', marginLeft:'5%'}}>
          <h1 style={{ color: 'var(--primary-dark)'}}>Newcastle University, UK</h1>
          <h2 style={{ color: 'var(--primary-dark)', marginTop: '10px'}}>B. Eng, Electronics and Computer Science, 2009 - 2011</h2>
        </div>
        <img src={ncl_logo} style={{ width:'300px', display: 'flex', marginRight:'5%'}}/>
      </div>
      <div className="Education-Item" style={{flexDirection:"row", width:'100%', justifyContent:'space-between', marginTop:'10%', display: 'flex', alignItems:'center', flexWrap:'wrap'}}> 
        <div style={{flexDirection:"column", display: 'flex', marginLeft:'5%'}}>
          <h1 style={{ color: 'var(--primary-dark)'}}>Jaypee Institue of Information Technology, JIIT</h1>
          <h2 style={{ color: 'var(--primary-dark)', marginTop: '10px'}}>B. Tech, Computer Science Engineering, 2008 - 2009</h2>
        </div>
        <img src={jiit_logo} style={{ width:'150px', display: 'flex', marginRight:'5%'}}/>
      </div>
     </div>
  );
}
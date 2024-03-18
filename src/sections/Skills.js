import React from "react";
import { ReactComponent as AndroidLogo } from '../assets/Android_logo_2023_(stacked).svg';
import { ReactComponent as IosLogo } from '../assets/ios.svg';
import { ReactComponent as KotlinLogo } from '../assets/Kotlin Monochrome Logo Black RGB.svg';
import { ReactComponent as JavaLogo } from '../assets/java-horizontal.svg';
import Ticker from "nice-react-ticker";

export default function Skills() {
  return (
    <div className='Section-Default Skills' style={{flexDirection:'column', justifyContent:'center'}}>
        <h1 style={{ color: 'var(--secondary)', marginTop:'5%'}}>Skills</h1>

        <h2 style={{ color: 'var(--secondary)', marginTop:'5%'}}>Technical</h2>
        <div style={{ flexDirection:'row', display: 'flex', width:'100%', flexWrap:'wrap', marginTop:'2%', marginBottom:'auto', alignItems:'center', backgroundColor:'#543'}}>
            <Ticker style={{flexDirection:'row', display: 'flex', justifyContent:'space-evenly', width:'100%', flexWrap:'wrap', marginTop:'2%', marginBottom:'auto', alignItems:'center', backgroundColor:'#543'}}>
            <div>
                <AndroidLogo fill='var(--secondary)' style={{width:'100px', height: '100%', marginLeft:'200px', alignSelf:'center'}}/>
            </div>
            <div>
                <IosLogo fill='var(--secondary)' style={{width:'100px', height: '100%', marginLeft:'200px', alignSelf:'center'}}/>
            </div>
            <div>
                <KotlinLogo fill='var(--secondary)' style={{width:'150px', height: '100%', marginLeft:'200px', alignSelf:'center'}}/>
            </div>
            <div>
                <JavaLogo fill='var(--secondary)' style={{width:'150px', height: '100%', marginLeft:'200px', alignSelf:'center'}}/>
            </div>
            </Ticker>
        </div>
    </div>
);
  }
import React from 'react';
import { ReactDOM } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.css';


function Section1()
{
return(
    <div>

        <div className='row'>
        
         <div className='col-6'>
         <br></br><br></br><br></br>
        <p style={{fontFamily:'Headers/H3' , fontSize:'38px'}} id='id1'><b>Our Story</b></p>
         </div>
         <div className='col-lg-3 col-sm-5'>
         <p style={{textAlign:'justify', fontFamily:'Body Large/Body Large Regular'}}>
         <br></br><br></br><br></br>
         Melissa Bentivoglio and Lee Belzberg have paired together their extensive backgrounds of elite fitness 
         instruction and entrepreneurship to bring you Frame—a groundbreaking approach to pilates disrupting the 
         traditional at-home fitness market. 
         </p>
         <br></br><br></br><br></br>
         </div>
        </div>

        <div>
            <img />
        </div>
    </div>
)
}
export default Section1;
import React from 'react';
import { ReactDOM } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.css';
import fb from './image/fb.png';
import twitter from './image/twitter.png';
import insta from './image/insta.png';
import logo from './image/logo.png';


function Footer()
{
return(
    <div style={{backgroundColor:'black' , color:'#FFFFFF'}}>

<br></br>
<br></br>
<div className='row'>

<div className='col-lg-3 col-sm-5 offset-1'>
    
<p style={{fontFamily:'Times New Roman' , textAlign:'justify' , fontSize:'30px'}}>contact</p>

<p style={{fontSize:'17px' , textAlign:'justify'}}>info@framefitness.com</p>
<p style={{fontSize:'17px' , textAlign:'justify'}}>Frame Innovative Technologies Corp.</p>
<p style={{fontSize:'17px' , textAlign:'justify' , marginTop:'-14px'}}>265 S. Western Avenue</p>
<p style={{fontSize:'17px' , textAlign:'justify', marginTop:'-14px'}}>P.O. Box #741940</p>
<p style={{fontSize:'17px' , textAlign:'justify', marginTop:'-14px'}}>Los Angeles, CA 90004-9998</p>


<br></br>



<div className='row' id='id6'>
<div className='col-1' >
<img src={insta}/>
</div>

<div className='col-1' id='id7'>
<img src={twitter}/>
</div>

<div className='col-1' id='id8'>
<img src={fb}/>
<br></br><br></br><br></br>
</div>
</div>

</div>

<div className='col-lg-4 offset-1 col-sm-1'>
<img src={logo} id='id9'/>
</div>



<div className='col-3 ' id='tou'>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br>

<p style={{fontFamily:'Times New Roman' , fontSize:'19px' , textAlign:'right'}} >
<u>Terms and Conditions</u></p>

<br></br>

<p style={{fontFamily:'Times New Roman' , fontSize:'19px' , textAlign:'right'}}>
©Copyright 2021
Frame is patent pending
</p>

</div>

</div>



    </div>
)
}
export default Footer;
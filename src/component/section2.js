import React from 'react';
import { ReactDOM } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import person from './image/person.png';
import social from './image/Social.png';
import frame from './image/frame.png';
import made from './image/made.png';
import styles from './styles.css';

function Section2()
{
return(
    <div >
        <div className='row'>

            <div className='col-6'>
            <img src={person} id='id2'/>

            <div className='centered'>
            <img src={social} id='id3'/>
            </div>

<div className='top-right' style={{background: 'linear-gradient( to bottom ,#ECD9FF, #FFFEFF)'}}>
<p style={{textAlign:'justify' , fontSize:'23px' , fontWeight:'600'}}><b>Melissa Bentivoglio
     <br></br>CEO & Co-Founder</b></p>  

<br></br> 

<p style={{textAlign:'justify' , fontFamily:'Times New Roman' , fontSize:'17px' , marginTop:'-20px'}}>Melissa Bentivoglio is a classically trained ballet 
dancer and a renowned pilates and fitness 
instructor. Melissa credits her dedication to pilates 
as having changed her life after years of elite level 
performance. In 2018, she 
designed her own 
proprietary reformer foruse on her own studio
By launching frame, she hope to make pilots more
 widely available and accessible, so that everyone has
a chnace to improve their quality life.
</p>


<p style={{textAlign:'justify' , fontSize:'23px' , fontWeight:'600'}}><b>Lee Co Biezberg
     <br></br>Co-Founder</b></p>  

<br></br> 

<p style={{textAlign:'justify' , fontFamily:'Times New Roman' , fontSize:'17px' , marginTop:'-20px'}}>Melissa Bentivoglio is a classically trained ballet 
dancer and a renowned pilates and fitness 
instructor. Melissa credits her dedication to pilates 
as having changed her life after years of elite level 
performance. In 2018, she 
designed her own 
proprietary reformer foruse on her own studio
By launching frame, she hope to make pilots more
 widely available and accessible, so that everyone has
a chnace to improve their quality life.
</p>

</div>

<br></br> 

<img src={frame} id='f'/>
<img src={made} id='m'/>

</div>


        </div>

    </div>
)
}
export default Section2;
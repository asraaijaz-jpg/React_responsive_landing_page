import React from 'react';
import { ReactDOM } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
import { NavDropdown, Nav , Container } from 'react-bootstrap';
import logo2 from './image/logo2.png';
import f1 from './image/f1.png';
import f2 from './image/f2.png';

function Navbar()
{
  return(
    <div>
     <>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style={{marginLeft:'110px'}}><img src={logo2}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbarSupportedContent" 
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent"style={{marginLeft:'1006px'}}>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" style={{marginLeft:'-230px'}}><b>The Reformer</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{color:'white' , marginLeft:'-20px'}}><b>Workouts</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#" style={{color:'white' ,  marginLeft:'28px', borderBottom:'6px solid #D9B2FF'}}><b>
       About</b></a>
        </li>
     
     <li>
       <img src={f2} style={{width:'30px' , height:'30px'  , marginLeft:'50px'}}/>
     </li>

     <li>
       <img src={f1} style={{width:'30px' , height:'30px ' , marginLeft:'30px' , marginLeft:'35px'}}/>
     </li>
      </ul>
      <form class="d-flex">
        <button class="btn btn-primary" type="submit" style={{width:'150px' , height:'50px',
      backgroundColor:'#245AE5' , color:'white'}}><b>SHOP NOW</b></button>
      </form>
    </div>
  </div>
</nav>

  </>


</div>
)
}

export default Navbar;
import React from 'react'
import "./contact.css";
import { Link } from 'react-router-dom';
import Protection from '../../img/Protection.svg';

export default function Contact() {
  return (
    <div className='contactcontainer'>
<div className='contactheader'>
<img className='smallsvg' src= { Protection } alt='' />
<h1 className='webapName'>Password Manager </h1>
<h3 className='texted' > Frictionless Security </h3>
</div>

<div className='contactmidsection'>

   <h3 className='moreinfo'>We need more information</h3>
 
 <p className='securitypara'>For your security , we need more information from you that only the owner of this account would Know . 
  Please contact our Support team below to get started. They will reach out with a response as soon as possible</p>


</div>

<div className='contactfooter'>

 <Link to="/password"><button className='contactbuttn'>Contact Support</button></Link>
</div>
    </div>
  )
}

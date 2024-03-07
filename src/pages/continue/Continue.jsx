import React from 'react'
import { Link } from 'react-router-dom';
import Protection from '../../img/Protection.svg';
import './continue.css';

export default function Continue() {
  return (
    <div className='continuecontainer'>
<div className='continueheader'>
<img className='smalsvg' src= { Protection } alt='' />
<h1 className='wbappName'>Password Manager </h1>
<h3 className='texte' > Frictionless Security </h3>
</div>

<div className='continuemidsection'>

   <h3 className='gettingback'>Getting back into your account</h3>
 
 <form className='cform'>
  <label for="email">

  </label>
  <input type="email" id="email" name="email" placeholder="Email Address"></input>

</form>

<a className='hvprob'  href='about:blank'>Having problem with your email ?</a>
</div>

<div className='continuefooter'>

 <Link to="/contact"><button className='buttn'>Continue</button></Link>
</div>
    </div>
  )
}

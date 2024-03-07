import React from 'react'
import './register.css' ;
import { Link } from 'react-router-dom';
import Protection from '../../img/Protection.svg';

export default function Register() {
  return (
    <div className='registercontainer'>
<div className='registerheader'>
<img className='smsvg' src= { Protection } alt='' />
<h1 className='appName'>Password Manager </h1>
<h3 className='txt' > Frictionless Security </h3>
</div>

<div className='registermidsection'>
 <table className='table' >
  <tr className='row'>
    <th className='clm1'><Link to="/register"><button className='registerbutton'>Register</button></Link> </th>
    <th className='clm2'><Link to="/login"><button className='loginbtn'>Login</button></Link></th>
  </tr>
 </table>
 
 <form className='form'>
  <label for="email">

  </label>
  <input type="email" id="email" name="email" placeholder="Email Address"></input>

  <label for="pwd"></label>
  <input type="password" id="pwd" name="pwd" placeholder="Password"></input>

  <label for="confirmPwd"></label>
  <input type="password" id="confirmPwd" name="confirmPwd" placeholder="Confirm Password"></input>
</form>

</div>

<div className='registerfooter'>
<p className='paragraph'>By clicking register , you are agreeing to <a href='about:blank'>Terms of services</a> and are acknowledging our <a href='about:blank'> Privacy Notice</a>.</p>
  <Link to="/login"><button className='btn'>Register</button></Link>
</div>
    </div>
  )
}

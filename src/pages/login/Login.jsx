import React from 'react'
import { Link } from 'react-router-dom';
import Protection from '../../img/Protection.svg';
import './login.css';

export default function Login() {
  return (
    <div className='logincontainer'>
<div className='loginheader'>
<img className='smasvg' src= { Protection } alt='' />
<h1 className='webappName'>Password Manager </h1>
<h3 className='text' > Frictionless Security </h3>
</div>

<div className='loginmidsection'>
 <table className='ltable' >
  <tr className='lrow'>
    <th className='clmn1'><Link to="/register"><button className='lregisterbutton'>Register</button></Link> </th>
    <th className='clmn2'><Link to="/login"><button className='lginbtn'>Login</button></Link></th>
  </tr>
 </table>
 
 <form className='lform'>
  <label for="email">

  </label>
  <input type="email" id="email" name="email" placeholder="Email Address"></input>

  <label for="pwd"></label>
  <input type="password" id="pwd" name="pwd" placeholder="Password"></input>

</form>

 <h5 className='forgotpassword'><a href='about:blank'>Forgot Password</a></h5>

</div>

<div className='loginfooter'>

 <Link to="/continue"><button className='butn'>Login</button></Link> 
</div>
    </div>
  )
}

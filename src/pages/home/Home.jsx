import React from 'react'
import './home.css';
import { Link } from 'react-router-dom';
import Protection from '../../img/Protection.svg';

export default function Home() {
  return (
    <div className='homecontainer'>
<div className='homeheader'>
<img className='bigsvg' src= { Protection } alt='' />
</div>
<div className='homemidsection'>
<h3 className='appname'>Password Manager</h3>
<h2 className='purpose'>Control Your Security </h2>
<p className='discription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim .</p>
</div>

<div className='homefooter'>
<Link to="/register">
          <button className='registerbtn'>Register</button>
        </Link>
        <Link to = "/login">
        <button className='lgnbtn'>Already have an account</button>
        </Link>
 
</div>
    </div>
    
  )
}

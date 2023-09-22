


import {Link} from 'react-router-dom';



const Navbar = () => {
  return (



<header >
<nav>      
<ul className='navbar-Header'>

<Link className='navbar-Header-link' to='dashbord'>Dashbord</Link>
<Link className='navbar-Header-link' to='Signin'>Sign-in</Link>
<Link className='navbar-Header-link' to='forcast' >Forcast</Link>

</ul>
</nav>
</header>



  );
}

export default Navbar;

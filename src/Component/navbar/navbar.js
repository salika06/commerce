import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';

const navbar = () => {
  

  return (
    <nav className="navbar navbar-default">
  <div className="container-fluid">
    
    <div className="navbar-header navbar__left">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <Link to="/" className="navbar-brand">Perfect <span>Threads</span></Link>
    </div>

    
    <div className="collapse navbar-collapse navbar-right navbar__right" id="collapse-1">
      <ul className="nav navbar-nav " >
        <li className="navbar__righttext"><Link to='/'>Home</Link></li>
        <li className="navbar__righttext"><Link to='/mens'>Men</Link></li>
        <li className="navbar__righttext"><Link to='/womens'>Women</Link></li>
        <li className="navbar__righttext"><Link to='/kids'>Kids</Link></li>
      </ul>
      {/* <Link to='/signin'><button type="button" class="btn btn-default navbar-btn">Sign in</button></Link> */}
    </div>
  </div>    
</nav>


  )
}

export default navbar
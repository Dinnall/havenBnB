import React from 'react';
import {Link} from 'react-router';

var Navbar = React.createClass({
  handleLogout: function(e){
    e.preventDefault()
    $.ajax({
      url:'/api/logout',
      type: 'POST'
    })
    .then(()=>{
    this.props.logout() 
    })
  },
   render: function() {
    return (
    <div>
         <nav className="navMid">
          <div className="navMid">
            <a href="/" className="logoWidth">
        <Link to='/'><img className='logo' src={require('./images/havenHOME.png')} /></Link>
            </a>
          </div>
      </nav>
      
       <nav className="navMid">
        <div className="navlist">
           <div className="nav navbar-nav">
            <ul className="nav navbar-nav"> 
              <li className="linetext"><Link to="/volunteer-login">Login Host</Link></li> 
              <li className="linetext"><Link to="/guest-login">Login Guest</Link></li>
            </ul>
            </div>
        </div>
      </nav>
      </div>
    )
  }
})

export default Navbar;


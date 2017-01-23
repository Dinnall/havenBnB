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
         <nav >
        <Link to='/'><img className='logo' src={require('./images/havenHOME.png')} /></Link>
          <div className="header-wrap">
          <div className= "list-inline">
            <a href="/" className="logoWidth">
            </a>
            </div>
          </div>
      </nav>
      
       <nav>
        <div className="navlist">
           <div className="">
            <ul className="ulLink"> 
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


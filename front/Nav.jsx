import React from 'react';
import {Link} from 'react-router';
// import './style/Nav.css';
// import {connect} from 'react-redux'; 
// import * as userActions from './reducers/userActions.js' 


{/*NAVIGATION BAR*/}
var Navbar = React.createClass({
  handleLogout: function(e){
    e.preventDefault()
    $.ajax({
      url:'/api/logout',
      type: 'POST'
    })
    .then(()=>{
    this.props.logout() //action from userActions
    })
  },






  render: function() {
    return (
    <div>

       { /*LOGO*/}
      <nav className="navMid">
          <div className="navMid">
            <a href="/" className="logoWidth">
        <Link to='/'><img className='logo' src={require('./images/havenHOME.png')} /></Link>

            </a>
          </div>
      </nav>


      { /*NAV TABS*/}
      <nav className="navMid">
        <div className="navlist">

          { /*Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="linetext"><Link to="/home">Home</Link></li> 
              <li className="linetext"><Link to="/volunteer-login">Login Host</Link></li> 
              <li className="linetext"><Link to="/guest-login">Login Guest</Link></li> 


{/*

  .header-nav-button.mod-join {
    min-width: 160px;
}
             {this.props.userState.user ?
                <li className="linetext"><a href='#' onClick={this.handleLogout}>Log Out</a></li> :
                <li className="linetext"><Link to="/login">Login</Link></li>
              }
              {! this.props.userState.user ?
                <li className="linetext"><Link to="/signup">Sign Up</Link></li> :
                null
              }              

*/}
 
            </ul>

          </div>{ /*/.navbar-collapse */}
        </div>{ /*/.container-fluid */}
      </nav>

    </div>
    )
  }
})

// const mapStoreToProps = store => (
//   {userState: store.userReducer}
// )
// export default connect(mapStoreToProps, userActions)(Navbar); //connects: mapStoreToProps is global state in the props

export default Navbar;


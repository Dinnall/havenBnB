import React from 'react';
import {Link,browserHistory} from 'react-router';
import { withRouter } from 'react-router'
// import './style/login.css';
// import {connect} from 'react-redux'; //conect library
// import * as userActions from './reducers/userActions.js' //import all actions & 

 {/*GALLERY COMPONENT & SIDEBAR*/}
var HostVolunteerLogin = React.createClass({

	submitLogin(){

	  //push to home
		browserHistory.push('/home')
		
		
	},
  
    render() {
    return (
      <div>
      	<h3>Host Login</h3>

	        {/*LOGIN FORM*/} 
		    <div className="log">
		        <div className="card">
		            <img id="log" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
					<form >
					    <input  type="email" placeholder="email"  required/>
					    <input  type="password" placeholder="password" required/>
					    <div id="remember" className="checkbox">
					        <label>
					            <input type="checkbox"/> Remember me
					        </label>
					    </div>
					    <input className="btn-success" type="button" onClick={this.submitLogin} value=" Login " />
					</form>

		            <a href="#"> Forgot the password? </a>
		        </div>
		    </div>


      </div>
      
    )
  }
})

//take obj from store turns into props, access & sets state 
// const mapStoreToProps = store => (
//   {user: store.userReducer}
// )
// export default connect(null, userActions)(Login); //connects: mapStoreToProps is global state in the props

export default HostVolunteerLogin;


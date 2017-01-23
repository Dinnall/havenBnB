import React from 'react';
import {Link,browserHistory} from 'react-router';
import { withRouter } from 'react-router'

var HostVolunteerLogin = React.createClass({
	submitLogin(){
		browserHistory.push('/create-post')	
	},
  
    render() {
    return (
      <div>
		    <div className="hostContainer">
	        <div className="hostForm">
      		<h3>Host Login</h3>
						<form>
					    <input  type="email" placeholder="email"  required/>
					    <input  type="password" placeholder="password" required/>
					    <input className="btn-success" type="button" onClick={this.submitLogin} value=" Login " />
						</form>
		        </div>
		    </div>


      </div>
      
    )
  }
})

export default HostVolunteerLogin;


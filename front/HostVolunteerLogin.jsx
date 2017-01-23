import React from 'react';
import {Link,browserHistory} from 'react-router';
import { withRouter } from 'react-router'
import './Index.css';


var HostVolunteerLogin = React.createClass({
	submitLogin(){
		browserHistory.push('/create-post')	
	},
  
    render() {
    return (
      <div>
		    <div className="hostContainer">
	        <div className="hostForm loginBox">
            <form>
          		<div className='hostTitle'>Host Login</div>
					    <input className="inputField" type="email" placeholder="Email"  required/>
              <br></br>
					    <input className="inputField" type="password" placeholder="Password" required/>
              <br></br>
					    <input className="btn-success" type="button" onClick={this.submitLogin} value=" Login " />
						</form>
		        </div>
		    </div>


      </div>
      
    )
  }
})

export default HostVolunteerLogin;


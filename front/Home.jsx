import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';


const Home = React.createClass({
render(){

	return(
		<div className="container-main">
			<div className='middle'>
		      <h3 className='middle-feature'>How it Works?</h3>
		      <p>
		      	  Welcome to our Haven BnB, NYC Homeless Shelters and Services for the needy. Below are all of the homeless shelters and services for the needy that provide help to those in need for New York and surrounding cities. 
		      </p>


		      <h3 className='middle-feature'>Host Policy</h3>
		      <p>
		      	 Haven BnB is the easiest way to maintain a papertrail of communication with your landlord and photos of your apartment conditions. Add a Status Update at any time from the dashboard to provide an update on your situation.
		      </p>


		      <h3 className='middle-feature'>Guest Policy</h3>
		      <p>
		      	   Welcome to our Haven BnB, NYC Homeless Shelters and Services for the needy. Below are all of the homeless shelters and services for the needy that provide help to those in need for New York and surrounding cities. 
		      </p>
		      
		    </div>

      </div>
		)
}
})

export default Home;





import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import './App.css'
//var Carousel = require('nuka-carousel');
import Carousel from 'nuka-carousel';


// Carousel slideWidth="800px" slideHeight="500px">
//         <img src="https://d13yacurqjgara.cloudfront.net/users/934157/screenshots/2294710/101515_anchorpoint_wonderlust.gif"/>
//         <img src="http://payload494.cargocollective.com/1/4/158201/12193756/Lyft_CharactersLineUp_1000.jpg"/>
//         <img src="https://d13yacurqjgara.cloudfront.net/users/76620/screenshots/1909179/foodpattern-drbl800.gif"/>
//       </Carousel
const Home = React.createClass({
render(){

	return(
		<div className="container-main">
		
			<div>
			<div className='text-picture'>

		      <h3 className= 'firstH'>How it Works?</h3>
		       <div className="betweenFirstHow">

		      <p className= 'center-word'>
		      	  Welcome to our Haven BnB, NYC Homeless Shelters and Services for the needy. Below are all of the homeless shelters and services for the needy that provide help to those in need for New York and surrounding cities. 
		      </p>

		       <img className='first-feature'src="https://d13yacurqjgara.cloudfront.net/users/934157/screenshots/2294710/101515_anchorpoint_wonderlust.gif"/>
                </div>
               </div>

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




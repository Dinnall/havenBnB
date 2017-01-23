import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import './App.css'

const Home = React.createClass({
render(){

	return(
		<div className="container-main">
		
			<div>
			  <div className='text-picture'>
                <h3 className= 'firstH'>How it Works? </h3>
		         <div className="betweenFirstHow">
                   <p className= 'center-word'>
		      	   Welcome to our Haven BnB, NYC Homeless Shelters and 
		      	   Services for the needy. Below are all of the homeless
                   shelters and services for the needy that provide help to 
                   those in need for New York and surrounding cities. 
                </p>
                   <img className='first-feature'src="https://d13yacurqjgara.cloudfront.net/users/934157/screenshots/2294710/101515_anchorpoint_wonderlust.gif"/>
         <div className='divBorder1'> </div>
                   
                </div>
               </div>
               </div>
             <div>
               <div className='text-picture2'>
                  <h3 className= 'secondH'>Host Policy </h3>
		            <div className="betweenSecondHow">
                     <p className= 'center-word2'>
		      	      Haven BnB is the easiest way to maintain a papertrail of communication with you and your guest. With us you will be helping solve a problem in a very major way.Lodging a individual means that for one night that person will have some security in where to go and not worry about the elements outside,especailly in NY winters. Contact us with any lingering question.
		             </p>
                     <img className='second-feature'src="http://payload494.cargocollective.com/1/4/158201/12193756/Lyft_CharactersLineUp_1000.jpg"/>
                     <div className='divBorder2'> </div>
                </div>
               </div>
              </div>


              <div>
               <div className='text-picture3'>
                  <h3 className= 'thirdH'> Guest Policy </h3>
		            <div className="betweenThirdHow">
                     <p className= 'center-word3'>
		      	      We know your situations isnt easy and we are here to ease your transition.With helping to shelter you and/or family,pleasee note your responsible with complying to Haven,your host and NYC Department of homeless services policies.
		             </p>
                     <img className='second-feature'src="https://d13yacurqjgara.cloudfront.net/users/21928/screenshots/1389103/fallingasleep-window-dribbble.gif"/>
                     <div className='divBorder3'> </div>
                    </div>
               </div>
              </div>




		    </div>
		)
   }
})

export default Home;







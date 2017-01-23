import React from 'react';
import $ from 'jquery';
import {Link, withRouter} from 'react-router';
import Popup from 'react-popup';
import './All.css/findRoom.css'


const PostARoom = React.createClass({
	getInitialState(){
		return {
      description: '',
		  zipCode: '',
		  images: '',	  
		  guestLimit: 1,	  
		  availability: ''
		}
	},
	componentDidMount() {
		Popup.addCloseListener(() => this.props.router.push('/'))
	},
	handleChange(inputField, e){
		console.log(e.target.value)
		this.setState({[inputField] : e.target.value})
	},
	submitNewPost(e) {
		console.log("are u calling")
		e.preventDefault()
		$.ajax({
		  url:'/api/listing',
		  type: 'POST',
		  data: {
        description: this.state.description,
		  	zipCode: this.state.zipCode,
		  	images: this.state.images,	  
		  	guestLimit: this.state.guestLimit,	  
		  	availability: this.state.availability

		  }
		})
		Popup.alert("Thank you for Posting with us! Your Post has been created!");
	},
	render(){
		return(
		<div className="main">
			 
             <img className="banner" src= "https://wallpaperscraft.com/image/new_york_night_skyscrapers_top_view_59532_3840x1200.jpg" />
             <h1 className="newListing">NEW LISTING</h1>
			 <h4 className="findYour">Find your ideal roomie</h4>

			<Popup />
			<form className="CreateAdd-container-main" onSubmit={this.submitNewPost} >
			  <h2 className="bassicInfo">BASIC INFORMATION</h2>
	          <h3>DESCRIBE THE PLACE</h3>

	          <textarea className="textarea1" onChange={this.handleChange.bind(this, 'description')} type="text" name="description" rows="5" class="form-control" name="description_room" id="description_room" placeholder="In a few words describe the room you're offering. Tell us about moving dates, desired arrangements, accommodations, environment, etc."></textarea>
	          <br/><br/>
	          

			  <h3 className="guestLimit">Upload some pictures, posts with more than 2 photos get more exposure.</h3>
	          <textarea className="textarea2" onChange={this.handleChange.bind(this, 'images')} type="text" name="images" placeholder="Add image url"></textarea>
	          <br/><br/>
	          <h3 className="guestLimit">Add Guest Limit:</h3>
	          <select onChange={this.handleChange.bind(this, 'guestLimit')} name="guestLimit">
				  <option value="1">One</option>
				  <option value="2">Two</option>
				  <option value="3">three</option>
				  <option value="4">Four</option>
			  </select>
			  <br/><br/>



	 		  <h3 className="guestLimit">Add Availability:</h3>
			  TRUE<input onChange={this.handleChange.bind(this, 'availability')} type="radio" name="availability" value="TRUE"/>
			  FALSE<input onChange={this.handleChange.bind(this, 'availability')} type="radio" name="availability" value="FALSE"/> <br/><br/>

	          <button className="btnSubmit">Submit Listing</button>

	        </form>
	      </div>
			)
	}
})

export default withRouter(PostARoom);

         

          

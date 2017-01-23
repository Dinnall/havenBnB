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
		//console.log("are u calling")
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
		Popup.alert("Thank you for listing! Your Post has been created.");
	},
	render(){
		return(
		<div className="main">

			<Popup />
			<form className="CreateAdd-container-main" onSubmit={this.submitNewPost} >
			  <h2 className="bassicInfo">Basic Information</h2>
	          <h3>Description</h3>

	          <textarea className="textarea1" onChange={this.handleChange.bind(this, 'description')} type="text" name="description" rows="5" className="form-control" name="description_room" id="description_room" placeholder="In a few words describe the room you're offering. Tell us about moving dates, desired arrangements, accommodations, environment, etc."></textarea>
	          <br/><br/>
	          

			  <h3 className="guestLimit">Upload Image.</h3>
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

         

          

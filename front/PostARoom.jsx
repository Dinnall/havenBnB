import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';


const PostARoom = React.createClass({
	getInitialState(){
		return {
      description: '',
		  zipCode: '',
		  images: '',	  
		  guestLimit: '',	  
		  availability: ''
		}
	},
	handleChange(inputField, e){
		console.log(e.target.value)
		this.setState({[inputField] : e.target.value})
	},
	submitNewPost() {
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
	},
	render(){
		return(
		<form className="CreateAdd-container-main">

          <h1>Post a Room</h1>
          <label>Add Description: </label><br/>
          <textarea onChange={this.handleChange.bind(this, 'description')} type="text" name="description"></textarea>
          <br/><br/>

           <label>Add Zip Code: </label><br/>
          <textarea onChange={this.handleChange.bind(this, 'zipCode')} type="text" name="zipCode"></textarea>
          <br/><br/>

          <label>Add Images: </label><br/>
          <textarea onChange={this.handleChange.bind(this, 'images')} type="text" name="images"></textarea>
          <br/><br/>

          <label>Add Guest Limit: </label> 
          <select onChange={this.handleChange.bind(this, 'guestLimit')} name="guestLimit">
			  <option value="1">One</option>
			  <option value="2">Two</option>
			  <option value="3">three</option>
			  <option value="4">Four</option>
		  </select>
		  <br/><br/>


 		  <label>Add Availability: </label><br/>
		  <input onChange={this.handleChange.bind(this, 'availability')} type="radio" name="availability" value="TRUE"/> TRUE<br/>
		  <input onChange={this.handleChange.bind(this, 'availability')} type="radio" name="availability" value="FALSE"/> FALSE<br/><br/>

          <Link to="/"><input onClick={this.submitNewPost} type="button" value="Submit" /></Link>

        </form>
			)
	}
})

export default PostARoom;

          // <input onChange={this.handleChange.bind(this, 'guestLimit')} type="text" name="guestLimit" placeholder="guestLimit"/>

          
{/*
          <br/>
          <label>Add Availability: </label><br/>
          <input onChange={this.handleChange.bind(this, 'availability')} type="radio" name="TRUE" value="availability"/> True<br/>
  		  <input onChange={this.handleChange.bind(this, 'availability')} type="radio" name="FALSE" value="availability"/> False<br/>
  		  <br/>

          <input onChange={this.handleChange.bind(this, 'availability')} type="text" name="availability"/> 
          <br/>
          <br/>
*/}
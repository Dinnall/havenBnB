import React from 'react';
import $ from 'jquery';
import {Link, withRouter} from 'react-router';
import Popup from 'react-popup';


const PostARoom = React.createClass({
	getInitialState(){
		return {
		  description: '',
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
		  	images: this.state.images,	  
		  	guestLimit: this.state.guestLimit,	  
		  	availability: this.state.availability

		  }
		})
		Popup.alert("Thank you for Posting with us! Your Post has been created!");
	},
	render(){
		return(
		<div>
			<Popup />
			<form className="CreateAdd-container-main" onSubmit={this.submitNewPost} >
	          <h1>Post a Room</h1>
	          <label>Add Description: </label><br/>
	          <textarea onChange={this.handleChange.bind(this, 'description')} type="text" name="description"></textarea>
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

	          <button>Post</button>

	        </form>
	      </div>
			)
	}
})

export default withRouter(PostARoom);

         

          

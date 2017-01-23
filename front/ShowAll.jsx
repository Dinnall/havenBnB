import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Link} from 'react-router';
import './Index.css';

const AllListings = React.createClass({
	getInitialState(){
		return {places: []}
	},
	componentDidMount(){
		 {
			$.ajax({
				url: '/api/listing',
				type: "GET"
			})
			.done( (data) => {
				this.setState({places: data})
			})
			.catch((error) => {
				console.log(error);
			})
		}
	},
	render: function(){
				//console.log("CURRENT LISTINGS", this.props)
			return(
			<div className="pageText">
				<h2 className="hostContainer">All Available Listings</h2>

				
					{this.state.places.length=== 0 ? "Loading..." : this.state.places.map((place, idx)=> {
						return (

								<Link to={"/room/" + place.id} key={idx}>
								 <div className="oneList">
							  		<img  className="gridImg" src={place.images[0]} />
							  		<p className="guestLimit"><strong>{place.guestLimit}</strong>/per night</p>
							  		<p className="availabile"><strong>{place.availability}</strong></p>
									</div>
								</Link>
							
						)
					})}
				

			</div>
		)
	}
})

export default AllListings;
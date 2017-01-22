import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import Home from './Home'
import Navbar from './Nav';
import HostVolunteerLogin from './HostVolunteerLogin';
import GuestLogin from './GuestLogin';
import RoomDetails from './RoomDetails';
import AllListings from './ShowAll';


const App = (props) => {
	return (
		<div>
			<Navbar />
			{props.children} 
		</div>
	)
}

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path='/' component={App}> 
		<IndexRoute component={Home} />
			<Route path="/home" component={Home} />
			<Route path="/volunteer-login" component={HostVolunteerLogin} />
			<Route path="/guest-login" component={GuestLogin} />
			<Route path="/room/:id" component={RoomDetails} />
			<Route path="/show-all" component={AllListings} />
		</Route>
	</Router>,
	document.getElementById('root')
)
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

const App = (props) => {
	return (
		<div>
			HELLO FROM THE FRONT HAVEN PAGE WOOT CHRIS&CHIPS!
		</div>
	)
}

ReactDOM.render({
	<Router history={browserHistory}>
		<Route path='/' component={App}> 
		</Route>
	</Router>,
	document.getElementById('root')
})
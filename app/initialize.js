// React Deps
import ReactDOM from 'react-dom'
import React from 'react'

// React Router
import { Router, Route, hashHistory } from 'react-router'

// App(s)
import App from 'components/App';

// App Modules
import About from 'components/About/About';
import Theme from 'components/Theme/Theme';

// Initialization based on DOMContentLoaded Event
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
  	(
  		<Router history={hashHistory}>
		    <Route path="/" component={App}>
		    	<Route path="/about" component={About}/>
		    	<Route path="/theme" component={Theme}/>
		    </Route>
		  </Router>
  	), document.querySelector('#app')
  );
});

import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import AllFairs from './pages/AllFairs';

// Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/all-fairs' component={AllFairs} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;

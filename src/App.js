import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import AllFairs from './pages/AllFairs';
import Fair from './pages/Fair';
import MyProfile from './pages/MyProfile';

// Components
import NavBar from './components/NavBar1';
import NavBar1 from './components/NavBar';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<NavBar />
			{/* <NavBar1 /> */}
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/fair' component={Fair} />
				<Route exact path='/all-fairs' component={AllFairs} />
				<Route exact path='/my-profile' component={MyProfile} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;

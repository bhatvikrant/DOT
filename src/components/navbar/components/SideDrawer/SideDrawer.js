import React from 'react';
import logo from '../../../../assets/logoBGBlue.png';
import { Container, Row, Col } from 'react-bootstrap';

import './SideDrawer.css';
// import LoginModal from '../../../LoginModal';

import { Link } from 'react-router-dom';

const sideDrawer = (props) => {
	let drawerClasses = 'side-drawer';
	if (props.show) {
		drawerClasses = 'side-drawer open';
	}
	return (
		<nav className={drawerClasses}>
			<Container>
				<Row>
					<Col align='center'>
						<img src={logo} alt='logo' height='180' width='180' />
						<h6>Digitally Optimized Trade Fairs.</h6>
					</Col>
				</Row>
			</Container>
			<ul>
				<li>
					<Link to='/about'>About Us</Link>
				</li>
				<li>
					<Link to='/all-fairs'>Fairs</Link>
				</li>
				<li>
					<Link to='/bookmarks'>Bookmarks</Link>
				</li>
				<li>
					<a href='' target='_blank' rel='noopener noreferrer'>
						Blog
					</a>
				</li>
				<li>
					<Link to='/'>Contact Us</Link>
				</li>
				<li>
					<Link to='/register-as-cook'>Login</Link>
				</li>
				{/* <li>
					<LoginModal state={props.loginState} setState={props.setLoginState} />
				</li> */}
			</ul>
		</nav>
	);
};

export default sideDrawer;

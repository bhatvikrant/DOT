import React from 'react';

// CSS
import './SideDrawer.css';

// 3rd party libraries
import { Container, Row, Col } from 'react-bootstrap';

// Images
import logo from '../../../../assets/logoBGBlue.png';

// Components
import LoginModal from '../../../LoginModal';

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
					<Link to='/fairs'>Fairs</Link>
				</li>
				<li>
					<Link to='/bookmarks'>Bookmarks</Link>
				</li>
				<li>
					<a
						href='https://dotfair.blogspot.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						Blog
					</a>
				</li>
				<li>
					<Link to='/'>Contact Us</Link>
				</li>

				<li>
					<LoginModal
						loginState={props.loginState}
						toggleLoginModal={props.toggleLoginModal}
						generateOTP={props.generateOTP}
						handleLoginInputChange={props.handleLoginInputChange}
						handleOtpSubmit={props.handleOtpSubmit}
						handleLogout={props.handleLogout}
					/>
				</li>
			</ul>
		</nav>
	);
};

export default sideDrawer;

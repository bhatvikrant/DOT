import React from 'react';

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
			<ul>
				<li>
					<Link to='/about'>About Us</Link>
				</li>
				<li>
					<Link to='/how-it-works'>How It Works</Link>
				</li>
				<li>
					<Link to='/hiring'>We Are Hiring</Link>
				</li>
				<li>
					<a
						href='https://blog.coox.in'
						target='_blank'
						rel='noopener noreferrer'
					>
						Blog
					</a>
				</li>
				<li>
					<Link to='/'>Book a Cook</Link>
				</li>
				<li>
					<Link to='/register-as-cook'>Register as Cook</Link>
				</li>
				{/* <li>
					<LoginModal state={props.loginState} setState={props.setLoginState} />
				</li> */}
			</ul>
		</nav>
	);
};

export default sideDrawer;

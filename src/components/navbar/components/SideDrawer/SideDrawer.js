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
					<Link to='/how-it-works'>Fairs</Link>
				</li>
				<li>
					<Link to='/hiring'>Bookmarks</Link>
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

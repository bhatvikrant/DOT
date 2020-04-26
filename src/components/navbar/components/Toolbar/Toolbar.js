import React from 'react';

// CSS
import './Toolbar.css';

// Images
import logo from '../../../../assets/logoBGBlue.png';

// Components
import LoginModal from '../../../LoginModal';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

import { Link, NavLink } from 'react-router-dom';

const toolbar = (props) => {
	console.log('TOOLBAR PROPS', props);
	return (
		<header className='toolbar'>
			<nav className='toolbar__navigation'>
				<div className='toolbar__logo'>
					<Link to='/'>
						<img src={logo} alt='logo' height='80' width='80' />
					</Link>
				</div>
				<div className='toolbar__logo'>
					<Link to='/'>
						<span className='logoName'>DOT Fairs</span>
					</Link>
				</div>
				<div className='toolbar_navigation-items'>
					<ul>
						<li>
							<NavLink to='/' activeClassName='selected'>
								About Us
							</NavLink>
						</li>
						<li>
							<NavLink to='/fairs' activeClassName='selected'>
								Fairs
							</NavLink>
						</li>
						<li>
							<NavLink to='/' activeClassName='selected'>
								Bookmarks
							</NavLink>
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
					</ul>
				</div>
				<div className='spacer' />
				<div className='toolbar_navigation-items'>
					<ul>
						{/* <li>
							<NavLink to='/register-as-cook' activeClassName='selected'>
								Login
							</NavLink>
						</li> */}
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
				</div>
				<div className='toolbar__toggle-button'>
					<DrawerToggleButton click={props.drawerClickHandler} />
				</div>
			</nav>
		</header>
	);
};

export default toolbar;

import React from 'react';
// import logo from '../../../../assets/images/photo.jpg';
// import LoginModal from '../../../LoginModal';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

import { Link, NavLink } from 'react-router-dom';

const toolbar = (props) => {
	// console.log('TOOLBAR PROPS', props);
	return (
		<header className='toolbar'>
			<nav className='toolbar__navigation'>
				<div className='toolbar__logo'>
					<Link to='/'>
						{/* <img src={logo} alt='logo' height='50' width='50' /> */}
					</Link>
				</div>
				<div className='toolbar__logo'>
					<Link to='/'>
						<span className='logoName'>DOTF</span>
					</Link>
				</div>
				<div className='toolbar_navigation-items'>
					<ul>
						<li>
							<NavLink to='/about' activeClassName='selected'>
								About Us
							</NavLink>
						</li>
						<li>
							<NavLink to='/how-it-works' activeClassName='selected'>
								Fairs
							</NavLink>
						</li>
						<li>
							<NavLink to='/hiring' activeClassName='selected'>
								Bookmarks
							</NavLink>
						</li>
						<li>
							<a href='/' target='_blank' rel='noopener noreferrer'>
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
						<li>
							<NavLink to='/register-as-cook' activeClassName='selected'>
								Login
							</NavLink>
						</li>
						{/* <li>
							<LoginModal
								state={props.loginState}
								setState={props.setLoginState}
							/>
						</li> */}
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

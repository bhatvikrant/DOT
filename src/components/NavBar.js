import React, { useState } from 'react';

import Toolbar from './navbar/components/Toolbar/Toolbar';
import SideDrawer from './navbar/components/SideDrawer/SideDrawer';
import Backdrop from './navbar/components/Backdrop/Backdrop';

const NavBar = (props) => {
	console.log('navbar props', props);
	const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

	const drawerToggleClickHandler = () => setSideDrawerOpen(!sideDrawerOpen);

	const backdropClickHandler = () => setSideDrawerOpen(!sideDrawerOpen);

	let backdrop;

	if (sideDrawerOpen) {
		backdrop = <Backdrop click={backdropClickHandler} />;
	}
	return (
		<div style={{ height: '100%' }}>
			<Toolbar
				drawerClickHandler={drawerToggleClickHandler}
				loginState={props.loginState}
				toggleLoginModal={props.toggleLoginModal}
				generateOTP={props.generateOTP}
				handleLoginInputChange={props.handleLoginInputChange}
				handleOtpSubmit={props.handleOtpSubmit}
				handleLogout={props.handleLogout}
			/>
			<SideDrawer
				show={sideDrawerOpen}
				loginState={props.loginState}
				toggleLoginModal={props.toggleLoginModal}
				generateOTP={props.generateOTP}
				handleLoginInputChange={props.handleLoginInputChange}
				handleOtpSubmit={props.handleOtpSubmit}
				handleLogout={props.handleLogout}
			/>
			{backdrop}
		</div>
	);
};
export default NavBar;

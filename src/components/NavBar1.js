import React, { useState } from 'react';

import Toolbar from './navbar/components/Toolbar/Toolbar';
import SideDrawer from './navbar/components/SideDrawer/SideDrawer';
import Backdrop from './navbar/components/Backdrop/Backdrop';

const NavBar = (props) => {
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
				setLoginState={props.setLoginState}
			/>
			<SideDrawer
				show={sideDrawerOpen}
				loginState={props.loginState}
				setLoginState={props.setLoginState}
			/>
			{backdrop}
		</div>
	);
};
export default NavBar;

import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Navbar.Brand>
				<NavLink
					exact
					to='/'
					activeStyle={{
						fontWeight: 'bold',
						// color: 'red',
					}}
					className='text-light text-decoration-none'
				>
					DOTF
				</NavLink>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='mr-auto'>
					<Nav.Link href='#features'>Bookmarks</Nav.Link>
					<Nav.Link href='#pricing'>Contact Us</Nav.Link>
					<Nav.Link>
						<NavLink
							exact
							to='/all-fairs'
							activeStyle={{
								fontWeight: 'bold',
								// color: 'red',
							}}
							className='text-light text-decoration-none'
						>
							Fairs
						</NavLink>
					</Nav.Link>
				</Nav>
				<Nav>
					<NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
						<NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
						<NavDropdown.Item href='#action/3.2'>
							Another action
						</NavDropdown.Item>
						<NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href='#action/3.4'>
							Separated link
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;

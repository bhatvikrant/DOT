import React from 'react';
import '../css/primaryColors.css';

import { SocialIcon } from 'react-social-icons';
import { Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className='text-center p-4 primaryBlueColor'>
			<Row>
				<Col md={4}>
					<center>
						<Row>
							<Col>
								<b className='text-light'>DOT</b>
								<hr className='bg-light w-50' />
							</Col>
						</Row>
					</center>
					<Row>
						<Col>
							<Link to='/' className='btn btn-link text-light'>
								Home
							</Link>
						</Col>
					</Row>
					<Row>
						<Col>
							<Link to='/' className='btn btn-link text-light'>
								About Us
							</Link>
						</Col>
					</Row>
					<Row>
						<Col>
							<Link to='/' className='btn btn-link text-light'>
								Contact Us
							</Link>
						</Col>
					</Row>
					<Row>
						<Col>
							<Link to='/' className='btn btn-link text-light'>
								Bookmarks
							</Link>
						</Col>
					</Row>

					<Row>
						<Col>
							<Link to='/' className='btn btn-link text-light'>
								Terms & Conditions
							</Link>
						</Col>
					</Row>
				</Col>

				{/* social media */}
				<Col md={4}>
					<Row>
						<Col className='p-3'>
							<SocialIcon
								url='https://www.linkedin.com/in/dot-fairs-515300169/'
								bgColor='#ecf0f1'
								target='_blank'
							/>
						</Col>
						<Col className='p-3'>
							<SocialIcon
								url='https://twitter.com/DotFairs'
								bgColor='#ecf0f1'
								target='_blank'
							/>
						</Col>
						<Col className='p-3'>
							<SocialIcon
								url='https://www.facebook.com/whatisdot/'
								bgColor='#ecf0f1'
								target='_blank'
							/>
						</Col>
						<Col className='p-3'>
							<SocialIcon
								url='https://www.instagram.com/what_is_dot/?igshid=1t0kg61j1gfon'
								bgColor='#ecf0f1'
								target='_blank'
							/>
						</Col>
					</Row>
				</Col>

				{/* Contact us */}

				<Col md={4}>
					<center>
						<Row>
							<Col>
								<b className='text-light'>Contact Us</b>
								<hr className='bg-light w-50' />
							</Col>
						</Row>
					</center>
					<Row>
						<Col>
							<a
								href='mailto:dotfairs@gmail.com'
								target='_blank'
								rel='noopener noreferrer'
							>
								<h6 className='btn btn-link text-light'>dotfairs@gmail.com</h6>
							</a>
						</Col>
					</Row>
					<Row>
						<Col>
							<a
								href='tel:+91-8178452370'
								target='_blank'
								rel='noopener noreferrer'
							>
								<h6 className='btn btn-link text-light'>+91-8178452370</h6>
							</a>
						</Col>
					</Row>
					<Row>
						<Col>
							<a
								href='tel:+91-9911744311'
								target='_blank'
								rel='noopener noreferrer'
							>
								<h6 className='btn btn-link text-light'>+91-9911744311</h6>
							</a>
						</Col>
					</Row>
				</Col>
			</Row>
			<hr />
			<Row>
				<Col>
					<h6>Copyright © 2020 DOTF - All Rights Reserved.</h6>
				</Col>
			</Row>
		</footer>
	);
};

export default Footer;

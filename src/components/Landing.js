import React from 'react';
import '../css/Landing.css';

import LandingImg from '../assets/landing.jpg';

// Icons
import digitalPhamphlets from '../assets/homepageIcons/digitalPhamphlets.png';
import saveExhibitors from '../assets/homepageIcons/saveExhibitors.png';
import utilizeContacts from '../assets/homepageIcons/utilizeContacts.png';

import { Row, Col } from 'react-bootstrap';
const Landing = () => {
	return (
		<div
			className='container-fluid p-0 bg-secondary landing__bg'
			style={{ minHeight: '320px', backgroundImage: 'url(' + LandingImg + ')' }}
		>
			<div
				style={{ background: 'rgba(0, 0, 0, 0.5)', minHeight: '320px' }}
				className='landing__bg'
			>
				<Row className='d-inline'>
					<Col>
						<h3 className='text-center text-light'>
							<b>DOT</b> makes your Trade Show visit more efficient.
						</h3>
					</Col>
				</Row>
				<div className='container text-center justify-content'>
					<Row>
						<Col align='center' md={4} xs={4}>
							<h6 className='min__height__60 text-light'>
								Get Digital Pamphlets
							</h6>

							<div
								style={{
									background: 'rgba(0, 0, 0, 0.5)',
									height: '150px',
									width: '150px',
								}}
								className='rounded-circle custom__icon__bg'
							>
								<img
									src={digitalPhamphlets}
									alt='Get Digital Pamphlets, say no to heavy bags'
									height='140'
									className='custom__icon'
								/>
							</div>
						</Col>

						<Col align='center' md={4} xs={4}>


							<div
								style={{
									background: 'rgba(0, 0, 0, 0.5)',
									height: '150px',
									width: '150px',
								}}
								className='rounded-circle custom__icon__bg'
							>
								<img
									src={saveExhibitors}
									alt='Save your Favourite Exhibitors'
									height='140'
									className='custom__icon'
								/>
							</div>
							<br />
							<h6 className='min__height__60 text-light'>
								Save your Favourite Exhibitors
							</h6>
						</Col>

						<Col align='center' md={4} xs={4}>
							<h6 className='min__height__60 text-light'>
								Utilize Contacts at Your Comfort
							</h6>

							<div
								style={{
									background: 'rgba(0, 0, 0, 0.5)',
									height: '150px',
									width: '150px',
								}}
								className='rounded-circle custom__icon__bg'
							>
								<img
									src={utilizeContacts}
									alt='Utilize Contacts at Your Comfort'
									height='140'
									className='custom__icon'
								/>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</div>
	);
};

export default Landing;

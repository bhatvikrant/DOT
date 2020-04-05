import React from 'react';
import testImg from '../assets/landingImg.jpg';
import '../css/Fair.css';
import '../css/primaryColors.css';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Fair = () => {
	return (
		<div>
			<div
				style={{
					backgroundImage: 'url(' + testImg + ')',
					minHeight: '200px',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center center',
				}}
				className='w-100'
				fluid='true'
			>
				<div
					style={{ background: 'rgba(0, 0, 0, 0.5)', minHeight: '200px' }}
				></div>
			</div>
			<div className='py-3 primaryBlueColor'>
				<Container fluid>
					<Row>
						<Col>
							<h3 className='text-light fair__name'>INDIAN TRADE FAIR 2019</h3>
						</Col>
						<Col align='right'>
							<Button
								variant='warning'
								className='text-light font-weight-bolder'
							>
								Check In
							</Button>
						</Col>
					</Row>
					<Row>
						<Col>
							<h6 className='text-light'>Pragati Maidan, Delhi, India</h6>
						</Col>
					</Row>
				</Container>
			</div>

			<br />

			{/* Date and Time Section */}
			<Container>
				<Row>
					<Col md={6} xs={12}>
						<Row>
							<Col>
								<h3>Date & Time</h3>
							</Col>
						</Row>
						<Row>
							<Col>
								<h6 className='text-muted font-weight-light'>
									Sat, 24 - Sun, 25 November 2019
								</h6>
							</Col>
						</Row>
						<Row>
							<Col>
								<h6 className='text-muted font-weight-light'>
									10:00 AM - 7:00 PM
								</h6>
							</Col>
						</Row>
					</Col>
					<Col md={6} xs={12} className='mt-3'>
						<Row>
							<Col align='center'>
								<div
									className='primaryBlueColor w-50 text-center p-3'
									style={{ borderRadius: '50px' }}
								>
									<Row>
										<Col md={6} xs={6}>
											<FontAwesomeIcon
												icon={faGlobe}
												style={{ fontSize: '20px' }}
												className='text-light'
											/>
										</Col>
										<Col md={6} xs={6}>
											<FontAwesomeIcon
												icon={faEnvelope}
												style={{ fontSize: '20px' }}
												className='text-light'
											/>
										</Col>
									</Row>
								</div>
							</Col>
						</Row>

						<br />

						<Row>
							<Col align='center'>
								<button className='btn primaryBlueColor font-weight-bolder text-light'>
									Exhibitor’s List
								</button>
							</Col>
							<Col align='center'>
								<button className='btn primaryBlueColor font-weight-bolder text-light'>
									Get Tickets
								</button>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>

			<br />

			{/* About Fair */}
			<div className='container'>
				<p>
					<h3>About</h3>
				</p>
			</div>
			<div className='container jumbotron'>something abt the fair....</div>
		</div>
	);
};

export default Fair;

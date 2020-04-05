import React from 'react';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import testImg from '../assets/landingImg.jpg';
import { Link } from 'react-router-dom';
import '../css/MyProfile.css';

const MyProfile = () => {
	return (
		<div>
			<br />
			<div className='container text-center'>
				<p>
					<h1>
						<b>Profile</b>
					</h1>
				</p>
			</div>
			<Container>
				<Row>
					<Col md={9}>
						<div className='jumbotron'>
							<Row>
								<Col md={3} align='center'>
									<img
										src={testImg}
										className='rounded-circle'
										alt='user profile'
										width='150'
										height='150'
									/>
								</Col>
								<Col md={9}>
									{/* User Name */}
									<Row>
										<Col className='my-5'>
											<h1 className='font-weight-light user__name'>
												Vikrant Bhat
											</h1>
										</Col>
									</Row>

									{/* Data Cards */}
									<Row>
										<Col>
											<Row>
												<Col md={4} xs={6} align='center'>
													<Card
														style={{ width: '10rem' }}
														className='text-center data__card'
													>
														<Card.Header>
															<h1 className='font-weight-bolder'>22</h1>
														</Card.Header>
														<Card.Body>
															<h6>Fairs attended</h6>
														</Card.Body>
													</Card>
												</Col>
												<Col md={4} xs={6} align='center'>
													<Card
														style={{ width: '10rem' }}
														className='text-center data__card'
													>
														<Card.Header>
															<h1 className='font-weight-bolder'>22</h1>
														</Card.Header>
														<Card.Body>
															<h6>Exhibitors saved</h6>
														</Card.Body>
													</Card>
												</Col>
											</Row>
										</Col>
									</Row>
								</Col>
							</Row>
						</div>
					</Col>
					<Col md={3}>
						<div className='container jumbotron'>
							<Row>
								<Col>
									<Link className='text-dark text-decoration-none'>
										<h6>Home</h6>
									</Link>
									<hr />
								</Col>
							</Row>
							<Row>
								<Col>
									<Link className='text-dark text-decoration-none'>
										<h6>Bookmarks</h6>
									</Link>
									<hr />
								</Col>
							</Row>
							<Row>
								<Col>
									<Link className='text-dark text-decoration-none'>
										<h6>Contact Us</h6>
									</Link>
									<hr />
								</Col>
							</Row>
							<Row>
								<Col>
									<Link className='text-dark text-decoration-none'>
										<h6>Privacy Policy</h6>
									</Link>
									<hr />
								</Col>
							</Row>
							<Row>
								<Col>
									<Link className='text-dark text-decoration-none'>
										<h6>Logout</h6>
									</Link>
									<hr />
								</Col>
							</Row>
						</div>
					</Col>
				</Row>
			</Container>

			<br />

			{/* Update Profile Form */}
			<div className='container text-center'>
				<p>
					<h2 style={{ fontSize: '20px' }}>
						<b>Update Profile</b>
					</h2>
				</p>
			</div>

			<div className='container jumbotron w-50 update__form'>
				<Row>
					<Col md={4}>
						<h6>Name</h6>
					</Col>
					<Col md={8}>
						<div className='form-group'>
							<input placeholder='Name' className='form-control' />
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={4}>
						<h6>Email</h6>
					</Col>
					<Col md={8}>
						<div className='form-group'>
							<input placeholder='Email' className='form-control' />
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={4}>
						<h6>Location</h6>
					</Col>
					<Col md={8}>
						<div className='form-group'>
							<input placeholder='Location' className='form-control' />
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={4}>
						<h6>Mobile</h6>
					</Col>
					<Col md={8}>
						<div className='form-group'>
							<input placeholder='Mobile' className='form-control' />
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={4}>
						<h6>Company</h6>
					</Col>
					<Col md={8}>
						<div className='form-group'>
							<input placeholder='Company' className='form-control' />
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={4}>
						<h6>Designation</h6>
					</Col>
					<Col md={8}>
						<div className='form-group'>
							<input placeholder='Designation' className='form-control' />
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={4}>
						<h6>About</h6>
					</Col>
					<Col md={8}>
						<div className='form-group'>
							<textarea placeholder='About' className='form-control' />
						</div>
					</Col>
				</Row>
				<br />
				<div className='text-center'>
					<Button variant='primary'>Save Changes</Button>
				</div>
			</div>
		</div>
	);
};

export default MyProfile;

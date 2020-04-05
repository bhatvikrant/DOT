import React from 'react';
import '../css/primaryColors.css';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import testImg from '../assets/landingImg.jpg';
import { Link } from 'react-router-dom';
import '../css/MyProfile.css';

const MyProfile = () => {
	return (
		<div>
			<br />

			<Container>
				<Row>
					<Col md={9}>
						<div className='jumbotron pt-4 pl-0'>
							<div
								className='primaryBlueColor p-2 round__corners__right profile__heading'
								style={{ width: '18%' }}
							>
								<h4 className='text-white mb-0'>Profile</h4>
							</div>
							<div className='p-5'>
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

			<div className='container jumbotron update__form pt-4 pl-0'>
				<div
					className='primaryBlueColor p-2 round__corners__right heading__width update__profile__heading'
					style={{ width: '20%' }}
				>
					<h4 className='text-white mb-0'>Update Profile</h4>
				</div>
				<div className='p-md-5 p-3'>
					<Row>
						<Col md={4}>
							<h6 className='form-control-plaintext'>Name</h6>
						</Col>
						<Col md={8}>
							<div className='form-group'>
								<input placeholder='Name' className='form-control' />
							</div>
						</Col>
					</Row>
					<Row>
						<Col md={4}>
							<h6 className='form-control-plaintext'>Email</h6>
						</Col>
						<Col md={8}>
							<div className='form-group'>
								<input placeholder='Email' className='form-control' />
							</div>
						</Col>
					</Row>
					<Row>
						<Col md={4}>
							<h6 className='form-control-plaintext'>Location</h6>
						</Col>
						<Col md={8}>
							<div className='form-group'>
								<input placeholder='Location' className='form-control' />
							</div>
						</Col>
					</Row>
					<Row>
						<Col md={4}>
							<h6 className='form-control-plaintext'>Mobile</h6>
						</Col>
						<Col md={8}>
							<div className='form-group'>
								<input placeholder='Mobile' className='form-control' />
							</div>
						</Col>
					</Row>
					<Row>
						<Col md={4}>
							<h6 className='form-control-plaintext'>Company</h6>
						</Col>
						<Col md={8}>
							<div className='form-group'>
								<input placeholder='Company' className='form-control' />
							</div>
						</Col>
					</Row>
					<Row>
						<Col md={4}>
							<h6 className='form-control-plaintext'>Designation</h6>
						</Col>
						<Col md={8}>
							<div className='form-group'>
								<input placeholder='Designation' className='form-control' />
							</div>
						</Col>
					</Row>
					<Row>
						<Col md={4}>
							<h6 className='form-control-plaintext'>About</h6>
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
		</div>
	);
};

export default MyProfile;

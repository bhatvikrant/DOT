import React, { Component } from 'react';
import { BASE_URL } from '../config';

// CSS
import '../css/primaryColors.css';
import '../css/MyProfile.css';

// 3rd Party libraries
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Images
import testImg from '../assets/landingImg.jpg';

class MyProfile extends Component {
	constructor(props) {
		console.log('myprofile props', props);
		super(props);

		this.state = {
			name: '',
			email: '',
			address: '',
			mobile: null,
			company: '',
			designation: '',
			about: '',

			nameError: '',
			emailError: '',
			updateProfileLoader: false,
		};
	}

	componentDidMount() {
		axios
			.get(`${BASE_URL}/user`, {
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
				},
			})
			.then((response) => {
				console.log('User data log', response);
				this.setState({
					name: response.data.data.user.name ? response.data.data.user.name : '',
					email: response.data.data.user.email ? response.data.data.user.email : '',
					address: response.data.data.user.address ? response.data.data.user.address : '',
					mobile: response.data.data.user.mobile,
					company: response.data.data.user.company ? response.data.data.user.company : '',
					designation: response.data.data.user.designation
						? response.data.data.user.designation
						: '',
					about: response.data.data.user.about ? response.data.data.user.about : '',
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	validate = () => {
		let nameError = '';
		let emailError = '';

		if (!this.state.name) {
			nameError = 'Name cannot be blank';
		}

		if (!this.state.email) {
			emailError = 'Email cannot be blank';
		}
		if (emailError || nameError) {
			this.setState({ emailError, nameError });
			return false;
		}
		return true;
	};

	handleUpdateUserProfile = (event) => {
		event.preventDefault();
		const isValid = this.validate();
		if (isValid) {
			console.log(this.state);
			this.setState({
				updateProfileLoader: true,
			});
			axios({
				method: 'PUT',
				url: `${BASE_URL}/user`,
				data: {
					name: this.state.name,
					email: this.state.email,
					address: this.state.address,
					mobile: this.state.mobile,
					company: this.state.company,
					designation: this.state.designation,
					about: this.state.about,
				},
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
				},
			})
				.then((response) => {
					console.log('update user deets log', response);

					// this.setState((prevState) => ({
					// 	name: response.data.name,
					// 	email: response.data.email,
					// 	mobile: response.data.mobile,
					// }));
				})
				.catch((err) => {
					console.log(err);
					alert('This email is already in use!');
				})
				.finally(() => {
					this.setState({
						updateProfileLoader: false,
						nameError: '',
						emailError: '',
					});
				});
		}
	};

	handleUpdateFormInputChange = (event) => {
		const isCheckbox = event.target.type === 'checkbox';
		this.setState({
			[event.target.name]: isCheckbox
				? event.target.checked
				: event.target.value,
		});
	};
	render() {
		return (
			<div>
				<br />
				{console.log('STATE', this.state)}
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
														{this.state.name}
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
										<Link to='/' className='text-dark text-decoration-none'>
											<h6>Home</h6>
										</Link>
										<hr />
									</Col>
								</Row>
								<Row>
									<Col>
										<Link
											to='/bookmarks'
											className='text-dark text-decoration-none'
										>
											<h6>Bookmarks</h6>
										</Link>
										<hr />
									</Col>
								</Row>
								<Row>
									<Col>
										<Link
											to='/contact-us'
											className='text-dark text-decoration-none'
										>
											<h6>Contact Us</h6>
										</Link>
										<hr />
									</Col>
								</Row>
								<Row>
									<Col>
										<Link
											to='/privacy-policy'
											className='text-dark text-decoration-none'
										>
											<h6>Privacy Policy</h6>
										</Link>
										<hr />
									</Col>
								</Row>
								<Row>
									<Col>
										<button
											className='btn btn-link p-0 text-dark text-decoration-none'
											onClick={() => this.props.handleLogout()}
										>
											<h6>Logout</h6>
										</button>
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
					<form onSubmit={this.handleUpdateUserProfile}>
						<div className='p-md-5 p-3'>
							<Row>
								<Col md={4}>
									<h6 className='form-control-plaintext'>Name</h6>
								</Col>
								<Col md={8}>
									<div className='form-group'>
										<input
											placeholder='Name'
											className='form-control'
											name='name'
											value={this.state.name}
											onChange={this.handleUpdateFormInputChange}
										/>
									</div>
									<div>
										<h6 className='text-danger'>{this.state.nameError}</h6>
									</div>
								</Col>
							</Row>
							<Row>
								<Col md={4}>
									<h6 className='form-control-plaintext'>Email</h6>
								</Col>
								<Col md={8}>
									<div className='form-group'>
										<input
											placeholder='Email'
											className='form-control'
											name='email'
											value={this.state.email}
											onChange={this.handleUpdateFormInputChange}
										/>
									</div>
									<div>
										<h6 className='text-danger'>{this.state.emailError}</h6>
									</div>
								</Col>
							</Row>
							<Row>
								<Col md={4}>
									<h6 className='form-control-plaintext'>Address</h6>
								</Col>
								<Col md={8}>
									<div className='form-group'>
										<input
											placeholder='Address'
											className='form-control'
											name='address'
											value={this.state.address}
											onChange={this.handleUpdateFormInputChange}
										/>
									</div>
								</Col>
							</Row>
							<Row>
								<Col md={4}>
									<h6 className='form-control-plaintext'>Mobile</h6>
								</Col>
								<Col md={8}>
									<div className='form-group'>
										<input
											placeholder='Mobile'
											className='form-control'
											name='mobile'
											value={this.state.mobile || ''}
											onChange={this.handleUpdateFormInputChange}
										/>
									</div>
								</Col>
							</Row>
							<Row>
								<Col md={4}>
									<h6 className='form-control-plaintext'>Company</h6>
								</Col>
								<Col md={8}>
									<div className='form-group'>
										<input
											placeholder='Company'
											className='form-control'
											name='company'
											value={this.state.company}
											onChange={this.handleUpdateFormInputChange}
										/>
									</div>
								</Col>
							</Row>
							<Row>
								<Col md={4}>
									<h6 className='form-control-plaintext'>Designation</h6>
								</Col>
								<Col md={8}>
									<div className='form-group'>
										<input
											placeholder='Designation'
											className='form-control'
											name='designation'
											value={this.state.designation}
											onChange={this.handleUpdateFormInputChange}
										/>
									</div>
								</Col>
							</Row>
							<Row>
								<Col md={4}>
									<h6 className='form-control-plaintext'>About</h6>
								</Col>
								<Col md={8}>
									<div className='form-group'>
										<textarea
											placeholder='About'
											className='form-control'
											name='about'
											value={this.state.about}
											onChange={this.handleUpdateFormInputChange}
										/>
									</div>
								</Col>
							</Row>
							<br />
							<div className='text-center'>
								<Button
									variant='primary'
									disabled={this.state.updateProfileLoader}
									type='submit'
								>
									Save Changes
									{this.state.updateProfileLoader ? '...' : null}
								</Button>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default MyProfile;

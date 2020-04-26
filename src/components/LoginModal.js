import React, { Component } from 'react';

// 3rd Party Libraries
import {
	Modal,
	Dropdown,
	Nav,
	Button,
	Row,
	Col,
	Container,
} from 'react-bootstrap';

// Images
import logo from '../assets/logoBGBlue.png';

class LoginModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			resendOtpTimer: this.props.loginState.resendOtpTimer,
		};
	}

	componentDidMount() {
		this.interval = setInterval(
			() =>
				this.setState((prevState) => ({
					resendOtpTimer: prevState.resendOtpTimer - 1,
				})),
			1000,
		);
	}

	render() {
		// console.log('loginModal props:', this.props);

		return (
			<div>
				{this.props.loginState.loggedIn ? (
					<Dropdown>
						<Dropdown.Toggle variant='primary'>
							<span role='img' aria-label=''>
								👤
							</span>{' '}
							{this.props.loginState.mobile}
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href='/my-profile' className='text-dark'>My Profile</Dropdown.Item>
							<Dropdown.Item onClick={() => this.props.handleLogout()} className='text-dark'>
								Logout
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				) : (
						<Nav.Link onClick={() => this.props.toggleLoginModal()}>
							Login / Sign Up
						</Nav.Link>
					)}
				<Modal
					show={this.props.loginState.showLoginModal}
					onHide={this.props.toggleLoginModal}
				>
					<Modal.Header closeButton></Modal.Header>
					<Modal.Body>
						<Container>
							<Row>
								<Col align='center'>
									<img
										src={logo}
										alt='Digitally Optimized Fairs Logo'
										width='130'
									/>
									<h6 className='text-muted'>Welcome to DOT!</h6>
									<h6 className='text-muted font-weight-light'>
										Login / Sign Up to explore more.
									</h6>
								</Col>
							</Row>
						</Container>

						<br />

						<div className='form-group'>
							<input
								name='mobile'
								type='tel'
								placeholder='Mobile Number'
								className='form-control'
								onChange={(e) => this.props.handleLoginInputChange(e)}
								style={{
									display: this.props.loginState.showMobileInput
										? 'block'
										: 'none',
								}}
							/>

							<div
								style={{
									display: this.props.loginState.showOTPInput
										? 'block'
										: 'none',
								}}
							>
								<p className='text-center font-weight-light'>
									OTP sent to: {this.props.loginState.mobile}
								</p>

								<input
									name='otp'
									type='tel'
									placeholder='OTP'
									className='form-control'
									onChange={(e) => this.props.handleLoginInputChange(e)}
								/>
								<div className='text-center my-2 text-muted'>
									{this.state.resendOtpTimer > 0 ? (
										<p>{this.state.resendOtpTimer + ' seconds'}</p>
									) : (
											<button className='btn btn-link'>
												<p onClick={(e) => this.props.generateOTP(e)}>
													Resend OTP
											</p>
											</button>
										)}
								</div>
							</div>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button
							variant='secondary'
							onClick={(e) => this.props.generateOTP(e)}
							style={{
								display: this.props.loginState.showMobileInput
									? 'block'
									: 'none',
							}}
						>
							Send OTP
						</Button>

						<br />
						<Button
							variant='primary'
							onClick={(e) => this.props.handleOtpSubmit(e)}
							style={{
								display: this.props.loginState.showOTPInput ? 'block' : 'none',
							}}
						>
							Login
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default LoginModal;

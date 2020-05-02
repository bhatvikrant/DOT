import React, { Component } from 'react';
import { BASE_URL } from './config';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

// Pages
import HomePage from './pages/HomePage';
import AllFairs from './pages/AllFairs';
import Fair from './pages/Fair';
import MyProfile from './pages/MyProfile';

// Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';

// TEMP
import TempStaticFair from './pages/TempStaticFair';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loginState: {
				showLoginModal: false,
				loggedIn: false,
				mobile: null,
				otp: null,
				resendOtpTimer: 60,
				showMobileInput: true,
				showOTPInput: false,

				loadingSendOtpBtn: false,
				loadingLoginBtn: false,
			},
		};
	}

	componentDidMount() {
		this.loginCheck();
	}

	// Login & Sign Up
	generateOTP = (event) => {
		event.preventDefault();
		this.setState((prevState) => ({
			loginState: { ...prevState.loginState, loadingSendOtpBtn: true },
		}));
		const params = {
			mobile: this.state.loginState.mobile,
		};
		this.setState((prevState) => ({
			loginState: { ...prevState.loginState, resendOtpTimer: 60 },
		}));

		axios({
			method: 'post',
			url: `${BASE_URL}/auth/generate-otp`,
			data: params,
		})
			.then((response) => {
				if (response.status === 200) {
					console.log('mobile no. resp', response);
					this.setState((prevState) => ({
						loginState: {
							...prevState.loginState,
							showMobileInput: false,
							showOTPInput: true,
						},
					}));
				}
			})
			.catch((error) => {
				alert(error);
				console.log(error);
			})
			.finally(() => {
				this.setState((prevState) => ({
					loginState: { ...prevState.loginState, loadingSendOtpBtn: false },
				}));
			});

		return false;
	};

	handleOtpSubmit = (event) => {
		event.preventDefault();
		this.setState((prevState) => ({
			loginState: { ...prevState.loginState, loadingLoginBtn: true },
		}));
		const params = {
			mobile: this.state.loginState.mobile,
			otp: this.state.loginState.otp,
		};
		axios({
			method: 'post',
			url: `${BASE_URL}/auth/login-and-signup`,
			data: params,
		})
			.then((response) => {
				if (response.status === 200) {
					localStorage.setItem('accessToken', response.data.token.accessToken);
					localStorage.setItem(
						'refreshToken',
						response.data.token.refreshToken,
					);
					localStorage.setItem('expiresIn', response.data.token.expiresIn);
					localStorage.setItem('mobile', response.data.user.mobile);

					this.setState((prevState) => ({
						loginState: {
							...prevState.loginState,
							showLoginModal: false,
							loggedIn: true,
							mobile: response.data.user.mobile,
						},
					}));
				}
			})
			.catch((error) => {
				alert(error);
				console.log(error);
			})
			.finally(() => {
				this.setState((prevState) => ({
					loginState: { ...prevState.loginState, loadingLoginBtn: false },
				}));
			});
		return false;
	};

	// Login Modal input handler (i.e. mobile no , otp)
	handleLoginInputChange = (event) => {
		console.log('EVENT', event.target.value);
		const { name, value } = event.target;
		this.setState((prevState) => ({
			loginState: {
				...prevState.loginState,
				[name]: value,
			},
		}));
	};

	loginCheck = () => {
		if (
			localStorage.getItem('expiresIn') &&
			moment().isBefore(moment(localStorage.getItem('expiresIn')))
		) {
			this.setState({
				loginState: {
					loggedIn: true,
					mobile: localStorage.getItem('mobile'),
				},
			});
		} else if (
			localStorage.getItem('mobile') &&
			localStorage.getItem('refreshToken')
		) {
			axios({
				method: 'post',
				url: `${BASE_URL}/auth/refresh-token`,
				data: {
					mobile: localStorage.getItem('mobile'),
					refresh_token: localStorage.getItem('refreshToken'),
				},
			})
				.then((response) => {
					console.log('refresh token api response:', response);
					if (response.status === 200) {
						localStorage.setItem('accessToken', response.data.accessToken);
						localStorage.setItem('refreshToken', response.data.refreshToken);
						localStorage.setItem('expiresIn', response.data.expiresIn);

						// this.setLoginState({
						// 	showLoginPopup: false,
						// 	loggedIn: true,
						// 	mobile: localStorage.getItem('mobile'),
						// });
						this.setState({
							loginState: {
								showLoginModal: false,
								loggedIn: true,
								mobile: localStorage.getItem('mobile'),
							},
						});
					} else {
						// this.setLoginState({
						// 	alert: true,
						// 	alertMsg: response.message,
						// 	alertColor: 'danger',
						// });
					}
				})
				.catch((error) => {
					// this.setLoginState({
					// 	alert: true,
					// 	alertMsg: 'Invalid Credentials',
					// 	alertColor: 'danger',
					// });
				})
				.finally(() => {
					// this.setState({
					// 	loading: false,
					// });
				});
		}
	};

	handleLogout = () => {
		localStorage.removeItem('accessToken');
		localStorage.removeItem('refreshToken');
		localStorage.removeItem('expiresIn');
		localStorage.removeItem('mobile');
		this.setState({
			loginState: {
				loggedIn: false,
				mobile: null,
			},
		});
		window.location.href = '/';
	};

	toggleLoginModal = () => {
		this.setState((prevState) => ({
			loginState: {
				...prevState.loginState,
				showLoginModal: !prevState.loginState.showLoginModal,
			},
		}));
	};

	render() {
		const access_token = localStorage.getItem('accessToken');

		return (
			<Router>
				<ScrollToTop />
				<NavBar
					loginState={this.state.loginState}
					toggleLoginModal={this.toggleLoginModal}
					generateOTP={this.generateOTP}
					handleLoginInputChange={this.handleLoginInputChange}
					handleOtpSubmit={this.handleOtpSubmit}
					handleLogout={this.handleLogout}
				/>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/fair-temp/webinar' component={TempStaticFair} />
					<Route exact path='/fair/:fairID' component={Fair} />
					<Route exact path='/fairs' component={AllFairs} />
					{access_token === null ? (
						<Redirect to='/' />
					) : (
						<>
							<Route
								exact
								path='/my-profile'
								render={() => <MyProfile handleLogout={this.handleLogout} />}
							/>
						</>
					)}
				</Switch>
				<Footer />
			</Router>
		);
	}
}

export default App;

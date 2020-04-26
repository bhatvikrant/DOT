import React, { Component } from 'react';
import testImg from '../assets/landingImg.jpg';
import '../css/Fair.css';
import '../css/primaryColors.css';
import { Row, Col, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { BASE_URL } from '../config';

class Fair extends Component {
	constructor(props) {
		super(props);

		this.state = { fairDetails: [] };
	}

	fetchFairData = () => {
		axios
			.get(`${BASE_URL}/fairs/${this.props.match.params.fairID}`)
			.then((response) => {
				this.setState({ fairDetails: response.data.data.fair }, () =>
					console.log('fair deets', this.state.fairDetails),
				);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	componentDidMount() {
		this.fetchFairData();
	}
	render() {
		const {
			name,
			venue,
			date,
			check_in_link,
			book_tickets_link,
			website_link,
			email_id,
			description,
		} = this.state.fairDetails && this.state.fairDetails;
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
								<h3 className='text-light fair__name'>{name}</h3>
							</Col>
							<Col align='right'>
								<a
									className='btn btn-warning text-light font-weight-bolder'
									href={check_in_link}
									target='_blank'
									rel='noopener noreferrer'
								>
									Check In
								</a>
							</Col>
						</Row>
						<Row>
							<Col>
								<h6 className='text-light'>{venue}</h6>
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
												<a
													href={website_link}
													target='_blank'
													rel='noopener noreferrer'
												>
													<FontAwesomeIcon
														icon={faGlobe}
														style={{ fontSize: '20px' }}
														className='text-light'
													/>
												</a>
											</Col>
											<Col md={6} xs={6}>
												<a
													href={`mailto:${email_id}`}
													target='_blank'
													rel='noopener noreferrer'
												>
													<FontAwesomeIcon
														icon={faEnvelope}
														style={{ fontSize: '20px' }}
														className='text-light'
													/>
												</a>
											</Col>
										</Row>
									</div>
								</Col>
							</Row>

							<br />

							<Row>
								<Col align='center'>
									<button className='btn primaryBlueColor font-weight-bolder text-light disabled'>
										Exhibitor’s List
									</button>
								</Col>
								<Col align='center'>
									<a
										className='btn primaryBlueColor font-weight-bolder text-light'
										href={book_tickets_link}
										target='_blank'
										rel='noopener noreferrer'
									>
										Get Tickets
									</a>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>

				<br />

				{/* About Fair */}
				<div className='container'>
					<h3>About</h3>
				</div>
				<div className='container jumbotron justify-content'>{description}</div>
			</div>
		);
	}
}

export default Fair;

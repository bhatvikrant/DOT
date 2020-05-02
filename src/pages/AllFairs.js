import React, { Component } from 'react';
import { BASE_URL } from '../config';

// 3rd party libraries
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { css } from '@emotion/core';
import ScaleLoader from 'react-spinners/ScaleLoader';

// Images
import testImg from '../assets/landingImg.jpg';
// Temp
import temp from '../assets/Webinar.jpg';

// CSS For loader
const override = css`
	display: block;
	margin: 0 auto;
	border-color: red;
`;

class AllFairs extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fairs: [],
			loading: false,
		};
	}

	fetchFairs = () => {
		this.setState({ loading: true });
		axios
			.get(`${BASE_URL}/fairs`)
			.then((response) => {
				console.log('all fairs', response.data.data.fairs);
				this.setState({ fairs: response.data.data.fairs, loading: false });
			})
			.catch((err) => {
				console.log(err);
			});
	};
	componentDidMount() {
		this.fetchFairs();
	}
	render() {
		return (
			<div className='container py-4'>
				{this.state.loading ? (
					<div
						className='text-center my-5'
						style={{ minHeight: '100vh', textAlign: 'center' }}
					>
						<ScaleLoader
							css={override}
							size={150}
							color={'#3368e8'}
							loading={true}
						/>
					</div>
				) : (
					<>
						{/* '' TEMPORARY - please delete afterwards, just put a '' here and delete rest */}
						<Row className='mb-4'>
							<Col>
								<div className='card'>
									<div className='card-body shadow rounded'>
										<Row>
											<Col md={3} sm={3}>
												<img
													src={temp}
													alt='Fashion industry vs Covid-19'
													height='100%'
													width='100%'
												/>
											</Col>
											<Col md={6} sm={6}>
												<Row>
													<Col>
														<h6 className='font-weight-bold'>
															Fashion industry vs Covid-19
														</h6>
													</Col>
												</Row>
												<Row>
													<Col>
														<h6>
															<b>Venue:</b> Online Webinar
														</h6>
													</Col>
												</Row>
												<Row>
													<Col>
														<h6>
															<b>Date: 10 May 2020</b>
														</h6>
													</Col>
												</Row>
												<Row>
													<Col md={6}>
														<a
															href='https://forms.gle/zz5VhQysaMUSQ3Fr7'
															target='_blank'
															rel='noopener noreferrer'
														>
															Book tickets
														</a>
													</Col>
													<Col md={6}>
														<Link to='/fair-temp/webinar'>View Details</Link>
													</Col>
												</Row>
											</Col>
											<Col md={3}>
												<Row>
													<Col align='right'>
														<h6 className='badge-info d-inline rounded p-2'>
															Webinar
														</h6>
													</Col>
												</Row>
											</Col>
										</Row>
									</div>
									<div className='card-footer py-1'>
										<h6
											className='font-weight-light m-0'
											style={{ fontSize: '14px' }}
										>
											Connect after event for new Upcoming shows
										</h6>
									</div>
								</div>
							</Col>
						</Row>
					</>
				)}

				{this.state.fairs.map((fair) => (
					<Row className='mb-4' key={fair.id}>
						<Col>
							<div className='card'>
								<div className='card-body shadow rounded'>
									<Row>
										<Col md={3} sm={3}>
											<img
												src={fair.image_link || testImg}
												alt={fair.name}
												height='100%'
												width='100%'
											/>
										</Col>
										<Col md={6} sm={6}>
											<Row>
												<Col>
													<h6 className='font-weight-bold'>{fair.name}</h6>
												</Col>
											</Row>
											<Row>
												<Col>
													<h6>
														<b>Venue:</b> {fair.venue}
													</h6>
												</Col>
											</Row>
											<Row>
												<Col>
													<h6>
														<b>Date:</b> {fair.date}
													</h6>
												</Col>
											</Row>
											<Row>
												<Col md={6}>
													<a
														href={fair.book_tickets_link}
														target='_blank'
														rel='noopener noreferrer'
													>
														Book tickets
													</a>
												</Col>
												<Col md={6}>
													<Link to={`fair/${fair.id}`}>View Details</Link>
												</Col>
											</Row>
										</Col>
										<Col md={3}>
											<Row>
												<Col align='right'>
													<h6 className='badge-info d-inline rounded p-2'>
														{fair.category}
													</h6>
												</Col>
											</Row>
										</Col>
									</Row>
								</div>
								<div className='card-footer py-1'>
									<h6
										className='font-weight-light m-0'
										style={{ fontSize: '14px' }}
									>
										Connect after event for new Upcoming shows
									</h6>
								</div>
							</div>
						</Col>
					</Row>
				))}
			</div>
		);
	}
}

export default AllFairs;

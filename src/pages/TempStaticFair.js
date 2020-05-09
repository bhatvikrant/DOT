import React, { Component } from 'react';
import testImg from '../assets/landingImg.jpg';
import '../css/Fair.css';
import '../css/primaryColors.css';
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Temp
import temp from '../assets/Webinar.jpg';

class TempStaticFair extends Component {
	render() {
		return (
			<div>
				<div
					style={{
						backgroundImage: 'url(' + temp + ')',
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
								<h3 className='text-light fair__name'>
									Fashion industry vs Covid-19
								</h3>
							</Col>
							<Col align='right'>
								<a
									className='btn btn-warning text-light font-weight-bolder'
									href='https://forms.gle/zz5VhQysaMUSQ3Fr7'
									target='_blank'
									rel='noopener noreferrer'
								>
									Check In
								</a>
							</Col>
						</Row>
						<Row>
							<Col>
								<h6 className='text-light'>Zoom Webinar</h6>
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
									<h6 className='text-muted font-weight-light'>10 May 2020</h6>
								</Col>
							</Row>
							<Row>
								<Col>
									<h6 className='text-muted font-weight-light'>11:00 AM</h6>
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
													href='https://forms.gle/zz5VhQysaMUSQ3Fr7'
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
													href='mailto:dotfairs@gmail.com'
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
										href='https://forms.gle/zz5VhQysaMUSQ3Fr7'
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
				<div className='container jumbotron justify-content'>
					<p>
						Considering the present situation due to the COVID-19 pandemic there
						is a need for the fashion industry to respond to this uncertainty.
					</p>

					<p>
						The COVID19 vs Fashion Industry webinar is here to help you set your
						business strategy with confidence, using exclusive insights from our
						seasoned industry leaders.
					</p>

					<p>Panelists:</p>
					<ul>
						<li>
							Mr. Anand Singh, He was the Director at Indian Bridal Fashion Week
							(IBFW), currently COO of Pernia's Pop-Up Shop , CEO at Little Tags
							& SketchToReality.com.
						</li>
						<li>
							Mr. Vineet Tyagi, He is Business Development Manager of Northern
							India Textile Research Association (Linked to Ministry of
							Textiles, Government of India).
						</li>
					</ul>

					<p>Topics that will be covered in Webinar</p>

					<ul>
						<li>Economic Impact of COVID-19 on the fashion Industry.</li>
						<li>Challenges businesses may face and ways to overcome them. </li>
						<li>Scope for new businesses in the fashion industry. </li>
						<li>
							How we can turn this situation from a 'threat' to 'opportunity'
							with the help of innovation and R&D?
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default TempStaticFair;

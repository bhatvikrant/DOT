import React from 'react';

import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import testImg from '../assets/landingImg.jpg';

const AllFairs = () => {
	return (
		<div className='container py-4'>
			<Row>
				<Col>
					<div className='card'>
						<div className='card-body shadow rounded'>
							<Row>
								<Col md={3} sm={3}>
									<img src={testImg} alt='fair' height='100%' width='100%' />
								</Col>
								<Col md={6} sm={6}>
									<Row>
										<Col>
											<h6 className='font-weight-bold'>
												Art of Business Storytelling for Leaders!
											</h6>
										</Col>
									</Row>
									<Row>
										<Col>
											<h6>
												<b>Venue:</b> Habitat World at India Habitat Centre, New
												Delhi, India
											</h6>
										</Col>
									</Row>
									<Row>
										<Col>
											<h6>
												<b>Date:</b> 03 Apr 2020
											</h6>
										</Col>
									</Row>
									<Row>
										<Col md={6}>
											<Link to='/'>Book tickets</Link>
										</Col>
										<Col md={6}>
											<Link to='/'>View Details</Link>
										</Col>
									</Row>
								</Col>
								<Col md={3}>
									<Row>
										<Col align='right'>
											<h6 className='badge-info d-inline rounded p-2'>
												Education & Training
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
								Conect after event for new Upcoming shows
							</h6>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default AllFairs;

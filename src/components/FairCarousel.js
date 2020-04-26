import React from 'react';

// CSS
import '../css/primaryColors.css';
import '../css/GlobalStyles.css';

// 3rd party libraries
import { Carousel, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// images
import test from '../assets/landingImg.jpg';

const UpcomingFairs = ({ title, fairs }) => {
	const redirectToFairPage = (id) => {
		window.location.href = `fair/${id}`;
	};
	return (
		<div className='container'>
			<br />
			<Row>
				<Col>
					<h6 className='badge-info p-2 rounded primaryBlueColor'>{title}</h6>
				</Col>
			</Row>
			<Row>
				<Col>
					<Carousel fade={true}>
						{
							(title,
							fairs.map((fair) => (
								<Carousel.Item
									key={fair.id}
									onClick={() => redirectToFairPage(fair.id)}
									style={{ cursor: 'pointer' }}
								>
									<img className='d-block w-100' src={test} alt={fair.name} />
									<Carousel.Caption
										style={{ background: 'rgba(0, 0, 0, 0.8)' }}
										className='rounded'
									>
										<h5 className='font-weight-bolder'>{fair.name}</h5>
										<p className='globalFontSize14'>{fair.venue}</p>
									</Carousel.Caption>
								</Carousel.Item>
							)))
						}
					</Carousel>
				</Col>
			</Row>
			<Row>
				<Col align='right'>
					<Link to='/fairs' className='btn btn-link'>
						See All {title}
					</Link>
				</Col>
			</Row>
		</div>
	);
};

export default UpcomingFairs;

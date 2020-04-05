import React, { useState } from 'react';
import '../css/primaryColors.css';
import { Carousel, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import test from '../assets/landingImg.jpg';

const UpcomingFairs = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	return (
		<div className='container'>
			<br />
			<Row>
				<Col>
					<h6 className='badge-info p-2 rounded primaryBlueColor'>
						Upcoming Fairs
					</h6>
				</Col>
			</Row>
			<Row>
				<Col>
					<Carousel
						activeIndex={index}
						onSelect={handleSelect}
						// style={{ width: '500px' }}
					>
						<Carousel.Item>
							<img className='d-block w-100' src={test} alt='First slide' />
							<Carousel.Caption>
								<h3>First slide label</h3>
								<p>
									Nulla vitae elit libero, a pharetra augue mollis interdum.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img className='d-block w-100' src={test} alt='Second slide' />

							<Carousel.Caption>
								<h3>Second slide label</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img className='d-block w-100' src={test} alt='Third slide' />

							<Carousel.Caption>
								<h3>Third slide label</h3>
								<p>
									Praesent commodo cursus magna, vel scelerisque nisl
									consectetur.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</Col>
			</Row>
			<Row>
				<Col align='right'>
					<Link to='/a' className='btn btn-link'>
						See All Upcoming Fairs
					</Link>
				</Col>
			</Row>
		</div>
	);
};

export default UpcomingFairs;

import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
// components
import Landing from '../components/Landing';
import UpcomingFairs from '../components/UpcomingFairs';
import FeaturedFairs from '../components/FeaturedFairs';
const HomePage = () => {
	return (
		<div>
			<Landing />
			<Container>
				<center>
					<Row style={{}} className='mw-100'>
						<Col md={6}>
							<FeaturedFairs />
						</Col>
						<Col md={6}>
							<UpcomingFairs />
						</Col>
					</Row>
				</center>
			</Container>
		</div>
	);
};

export default HomePage;
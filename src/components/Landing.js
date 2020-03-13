import React from 'react';
import { Row, Col } from 'react-bootstrap';
const Landing = () => {
	return (
		<div className='container-fluid p-0 bg-danger' style={{ height: '320px' }}>
			<Row className='d-inline'>
				<Col>
					<h3 className='text-center'>
						DOT makes your Trade Show visit more efficient.
					</h3>
				</Col>
			</Row>
			<div className='container'>
				<Row>
					<Col>
						<h6>Get Digital Pamphlets, say no to heavy bags</h6>
					</Col>

					<Col>
						<h6>Save your Favourite Exhibitors</h6>
					</Col>

					<Col>
						<h6>Utilize Contacts at Your Comfort</h6>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Landing;

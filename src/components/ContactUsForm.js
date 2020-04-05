import React from 'react';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';

const ContactUsForm = () => {
	return (
		<div>
			{/* Contact Us Form */}
			<div className='container text-center mt-3'>
				<p>
					<h2 style={{ fontSize: '20px' }}>
						<b>Contact Us</b>
					</h2>
				</p>
			</div>

			<div className='container jumbotron w-50 update__form'>
				<Row>
					<Col md={4}>
						<h6>Name</h6>
					</Col>
					<Col md={8}>
						<div className='form-group'>
							<input placeholder='Name' className='form-control' />
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={4}>
						<h6>Email</h6>
					</Col>
					<Col md={8}>
						<div className='form-group'>
							<input placeholder='Email' className='form-control' />
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={4}>
						<h6>Mobile</h6>
					</Col>
					<Col md={8}>
						<div className='form-group'>
							<input placeholder='Mobile' className='form-control' />
						</div>
					</Col>
				</Row>

				<Row>
					<Col md={4}>
						<h6>Message</h6>
					</Col>
					<Col md={8}>
						<div className='form-group'>
							<textarea placeholder='Message' className='form-control' />
						</div>
					</Col>
				</Row>
				<br />
				<div className='text-center'>
					<Button variant='primary'>Save Changes</Button>
				</div>
			</div>
		</div>
	);
};

export default ContactUsForm;

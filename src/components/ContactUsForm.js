import React from 'react';
import '../css/primaryColors.css';
import { Row, Col, Button } from 'react-bootstrap';

const ContactUsForm = () => {
	return (
		<div>
			{/* Contact Us Form */}
			<div className='container jumbotron update__form pt-4 pl-0 w-50'>
				<div
					className='primaryBlueColor p-2 round__corners__right heading__width update__profile__heading'
					style={{ width: '30%' }}
				>
					<h4 className='text-white mb-0'>Contact Us</h4>
				</div>
				<div className='p-md-5 p-3'>
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
		</div>
	);
};

export default ContactUsForm;

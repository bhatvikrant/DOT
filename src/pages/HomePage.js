import React, { Component } from 'react';
import { BASE_URL } from '../config';

import { Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';

// components
import Landing from '../components/Landing';
import FairCarousel from '../components/FairCarousel';
import ContactUsForm from '../components/ContactUsForm';

class HomePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			featuredFairs: [],
			upcomingFairs: [],
		};
	}

	componentDidMount() {
		this.fetchFeaturedFairs();
		this.fetchUpcomingFairs();
	}

	fetchFeaturedFairs = () => {
		axios
			.get(`${BASE_URL}/fairs?type=featured`)
			.then((response) => {
				this.setState({ featuredFairs: response.data.data.fairs });
			})
			.catch((err) => {
				console.log(err);
			});
	};
	fetchUpcomingFairs = () => {
		axios
			.get(`${BASE_URL}/fairs?type=upcoming`)
			.then((response) => {
				this.setState({ upcomingFairs: response.data.data.fairs });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		return (
			<div>
				<Landing />
				<Container>
					<center>
						<Row>
							<Col md={6}>
								{console.log('state', this.state)}
								<FairCarousel
									title='Featured Fairs'
									fairs={this.state.featuredFairs}
								/>
							</Col>
							<Col md={6}>
								<FairCarousel
									title='Upcoming Fairs'
									fairs={this.state.upcomingFairs}
								/>
							</Col>
						</Row>
					</center>
					<br />
					<br />
					<br />
					<ContactUsForm />
				</Container>
			</div>
		);
	}
}
export default HomePage;

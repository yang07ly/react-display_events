import React from 'react';
import './loading.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Event from './Event';

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: this.fetchData(process.env.REACT_APP_API_URL),
			error: undefined
		}
	}

	render() {
		if (this.state.data) {
			return (
				<div className="container">
					<p></p>
					<h1>Events</h1>
					<p></p>
					<table className="table">
						<thead className="thead-light">
							<tr>
								<th scope="col">Name</th>
								<th scope="col">Venue</th>
								<th scope="col">Start Date</th>
								<th scope="col">Start Time</th>
							</tr>
						</thead>
						<tbody>
							{ this.state.data.result.map(
								event => <Event key={event.EventID} event={event} />
							)}
						</tbody>
					</table>
				</div>
			)
		} else {
			if (this.state.error) {
				return (
					<div className="container">
						<p></p>
						<h1>Events</h1>
						<p></p>
						<div className="alert alert-danger" role="alert">Error! :( {this.state.error}</div>
					</div>
				)
			} else {
				return (
					<div className="container">
						<p></p>
						<h1>Events</h1>
						<p></p>
						<div className="loader"></div>
					</div>
				)
			}
		}
		
	}

	fetchData(url) {
		fetch(url, {
			method: 'GET',
			mode: 'cors',
			headers: {
				"Content-Type": "application/json",
			}

		}).then(
			response=> {
				if (response.ok) {
					return response.json()
				} else {
					throw new Error('Network error.')
				}
			}
		).then(
			json => this.setState({ data:json })
		).catch(
			error=> this.setState({ error: error.message })
		)
	}
}
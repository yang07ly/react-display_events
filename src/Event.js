import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

export default class Event extends React.Component {
	render() {
		const style = {
			fontWeight: "normal",
			width: 200,
			textAlign: "left"
		}
		const date = new Date(this.props.event.AdvertisedStartTime)
		let venue = this.props.event.Venue.Venue
		if (this.props.event.Venue.StateCode) {
			venue += ", " + this.props.event.Venue.StateCode
		}
		return (
			<tr>
				<th style={style}><div id="eventName">{ this.props.event.EventName }</div></th>
				<th style={style}>{ venue }</th>
				<th style={style}>{ date.toDateString() }</th>
				<th style={style}>{ date.toTimeString() }</th>
			</tr>
		)
	}
}
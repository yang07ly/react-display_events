import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Event from './Event';
import Adapter from 'enzyme-adapter-react-16';
import { render } from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

test('Error messages pop up when there is network error', ()=>{
	const event = {
		EventID: "123",
		EventName: "123",
		Venue: "1",
		AdvertisedStartTime: "2018-09-10T02:08:00Z"
	}
	const row = render(<Event key={event.EventID} event={event} />);
	console.log(row.find('div#eventName').text())

	expect(row.find('div#eventName').text()).toEqual("123")
})
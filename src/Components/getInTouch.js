import React from 'react';
import Form from './Form';
import IconList from './iconList';


export default function GetInTouch(props) {
	const formProps = {
		method: "post",
		action: "https://formsubmit.co/ad445c50c346c2a38d4d79094ff96bb9",
		sendMessage: "Send Message",
		fields: [
			{
				name: "name",
				type: "text",
				required: true
			},
			{
				name: "email",
				type: "email",
				required: true
			},
			{
				name: "message",
				required: true,
				textArea: true,
				rows: 4,
			},
		]
	}
	const contactListProps = {
		items: [{
			icon: "fa-brands fa-github",
			url: "https://github.com/warleon",
			text: "warleon"
		}]
	}
	return (
		<div className="inner">
			<h2 className="major">Get in touch</h2>
			<Form {...formProps} />
			<IconList {...contactListProps} />
			{/* <ul className="contact">
				<li className="icon brands fa-github">
					<a href="https://github.com/warleon">warleon</a>
				</li>
			</ul> */}

		</div>
	);
}
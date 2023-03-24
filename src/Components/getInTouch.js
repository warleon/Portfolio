import React from 'react';
import styled from 'styled-components';
import Form from './Form';
import IconList from './iconList';

const Wrapper = styled.div`
	display:flex;
	flex-wrap:wrap;
`

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
	return (
		<Wrapper>
			<Form {...formProps} />
			<IconList items={props.socialNetworks} />
		</Wrapper>
	);
}
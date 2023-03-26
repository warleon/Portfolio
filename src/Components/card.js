import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import Title from './title';


const Image = styled.div`
	margin: 0 0 1.5em 1em;
`

const CallToAction = styled.span`
	margin-left:1em;
	text-transform: uppercase;
`
const Content = styled.p`
	height: 10em;
`

const BottomLink = styled.div`
	--text-color :${({ theme: { action } }) => action};
	display: block;
	margin: 0 0 1em 0;
	color:var(--text-color);
`
const Container = styled.div`
	--bg-color :${({ theme: { neutral } }) => neutral}75;
	--text-color :${({ theme: { text } }) => text};

	padding: 0 1em ;
	width:20em;
	box-sizing: border-box;
	border-radius: 5px;
	border: 2px solid var(--text-color);
	color:var(--text-color);
	background: var(--bg-color);
`

export default function Card(props) {

	return (
		<Container  >
			<Title>{props.title}</Title>
			<Content>{props.description}</Content>
			<HashLink smooth to={props.url}>
				<BottomLink >
					<FontAwesomeIcon icon="fas fa-chevron-circle-right" />
					<CallToAction>{props.call}</CallToAction>
				</BottomLink>
			</HashLink>
		</Container>
	);
}
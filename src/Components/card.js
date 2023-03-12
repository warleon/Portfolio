import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
	padding-bottom: 1em;
	border-bottom: solid 2px rgba(255, 255, 255, 0.125);
	text-transform: uppercase;
`

const Image = styled.a`
	margin-bottom: 1.5em;
	img {
		border-radius: 5px 5px 0 0;
    width: 100%;
		aspect-ratio: 16 / 9;
		min-width: 240px;
		max-width: 320px;
	}
`

const CallToAction = styled.span`
	margin-left:1em;
	text-transform: uppercase;
`
const Content = styled.p`
	margin: 1em 0;
`

const BottomLink = styled.a`
	margin-bottom: 1em;
`
const Container = styled.div`
`

export default function Card(props) {

	return (
		<Container>
			<Image href={props.url} ><img src={props.img} alt={props.imgtext} /></Image>
			<Title>{props.title}</Title>
			<Content>{props.description}</Content>
			<BottomLink href={props.url} >
				<FontAwesomeIcon icon="fa-solid fa-greater-than" />
				<CallToAction>{props.call}</CallToAction>
			</BottomLink>
		</Container>
	);
}
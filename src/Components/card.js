import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
	padding-bottom: 1em;
	margin: 0 1em ;
	border-bottom: solid 2px  rgb(133, 133, 133);
	text-transform: uppercase;
`

const Image = styled.a`
	margin-bottom: 1.5em;
	img {
		border-radius: 5px 5px 0 0;
    width: 100%;
		aspect-ratio: 16 / 9;
		object-fit:cover;
	}
`

const CallToAction = styled.span`
	margin-left:1em;
	text-transform: uppercase;
`
const Content = styled.p`
	margin: 1em ;
	height: 6em;
`

const BottomLink = styled.a`
	display: block;
	margin: 0 1em 1em 1em;
`
const Container = styled.div`
	max-width: 240px;
	max-width: 320px;
	box-sizing: border-box;
	border-radius: 5px;
	border: 2px solid rgb(133, 133, 133);
	background: rgba(255,255,255,0.025);
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
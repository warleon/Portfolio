import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = styled.h3`
	--text-color :${({ theme: { text } }) => text};
	padding-bottom: 1em;
	margin: 0 1em ;
	border-bottom: solid 2px var(--text-color);
	text-transform: uppercase;
`

const Image = styled.div`
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

const BottomLink = styled.div`
	--text-color :${({ theme: { action } }) => action};
	display: block;
	margin: 0 1em 1em 1em;
	color:var(--text-color);
`
const Container = styled.div`
	--bg-color :${({ theme: { neutral } }) => neutral}75;
	--text-color :${({ theme: { text } }) => text};

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
			<Link to={props.url}>
				<Image >
					<img src={props.img} alt={props.imgtext} />
				</Image>
			</Link>
			<Title>{props.title}</Title>
			<Content>{props.description}</Content>
			<Link to={props.url}>
				<BottomLink >
					<FontAwesomeIcon icon="fa-solid fa-greater-than" />
					<CallToAction>{props.call}</CallToAction>
				</BottomLink>
			</Link>
		</Container>
	);
}
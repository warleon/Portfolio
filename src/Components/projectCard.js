import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
	padding-bottom: 1em;
	border-bottom: solid 2px rgba(255, 255, 255, 0.125);
	text-transform: uppercase;
`

export default function ProjectCard(props) {

	return (
		<article>
			<a href="#" class="image"><img src={props.img} alt={props.imgtext} /></a>
			<Title>{props.title}</Title>
			<p>{props.description}</p>
			<a href={`projects/${props.id}`} class="special">Learn more</a>
		</article>
	);
}
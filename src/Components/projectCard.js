import React from 'react';

export default function ProjectCard(props) {

	return (
		<article>
			<a href="#" class="image"><img src={props.img} alt={props.imgtext} /></a>
			<h3 class="major">{props.title}</h3>
			<p>{props.description}</p>
			<a href={`projects/${props.id}`} class="special">Learn more</a>
		</article>
	);
}
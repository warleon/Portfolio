import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import Card from './card';
import projects from '../data/projects';

const Title = styled.h3`
	padding-bottom: 1em;
	margin: 0 1em ;
	border-bottom: solid 2px  rgb(133, 133, 133);
	text-transform: uppercase;
`

const Wrapper = styled.div`
`
const CallToAction = styled.span`
	margin-left:1em;
	text-transform: uppercase;
`

export default function Showcase(props) {

	let { projectId } = useParams()
	let project = projects[projectId]
	return (
		<Wrapper>
			<div>
				<h2>{project.title}</h2>
				<p></p>
			</div>
			<div>
				<h3>motivation</h3>
				<p>{project.motivation}</p>
			</div>
			<div>
				<h3>usage</h3>
				{
					project.usage.split("\n").map((line, i) => (
						<p key={i}>{line}</p>
					))
				}
			</div>
			<div>
				<h3>TECHNOLOGIES</h3>
				<table>
					<tbody>
						{
							project.tech.map((line, i) => (
								<tr key={i}><td>{line}</td></tr>
							))
						}
					</tbody>
				</table>
			</div>
			<div>
				<h3>source code</h3>
				<Link to={project.source[0]}>
					<FontAwesomeIcon icon="fa-brands fa-github" />
					<CallToAction>{project.source[1]}</CallToAction>
				</Link>
			</div>
		</Wrapper>
	);
}
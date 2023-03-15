import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import Card from './card';
import projects from '../data/projects';

const Title = styled.h2`
	padding-bottom: 1em;
	margin: 0 1em ;
	border-bottom: solid 2px  rgb(133, 133, 133);
	text-transform: uppercase;
`
const Subtitle = styled.h3`
	padding-bottom: 1em;
	margin: 0 1em ;
	border-bottom: solid 2px  rgb(133, 133, 133);
	text-transform: uppercase;
`

const Line = styled.p`
`

const Section = styled.div`
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
			<Section>
				<Title>{project.title}</Title>
				<Line>{project.longDescription}</Line>
			</Section>
			<Section>
				<Subtitle>motivation</Subtitle>
				<Line>{project.motivation}</Line>
			</Section>
			<Section>
				<Subtitle>usage</Subtitle>
				{
					project.usage.split("\n").map((line, i) => (
						<Line key={i}>{line}</Line>
					))
				}
			</Section>
			<Section>
				<Subtitle>TECHNOLOGIES</Subtitle>
				<table>
					<tbody>
						{
							project.tech.map((line, i) => (
								<tr key={i}><td>{line}</td></tr>
							))
						}
					</tbody>
				</table>
			</Section>
			<Section>
				<Subtitle>source code</Subtitle>
				<Link to={project.source[0]} >
					<FontAwesomeIcon icon="fa-brands fa-github" />
					<CallToAction>{project.source[1]}</CallToAction>
				</Link>
			</Section>
		</Wrapper>
	);
}
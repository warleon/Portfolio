import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import Card from './card';
import projects from '../data/projects';
import Title from './title'

const Subtitle = styled.h3`
	--text-color :${({ theme: { text } }) => text};
  --bg-color :${({ theme: { background } }) => background}; 
  --attention-color :${({ theme: { attention } }) => attention}; 
	padding-bottom: 1em;
	margin: 1em 0;
	position:relative;
	text-transform: uppercase;
	::after{
		content: ' ';
		position: absolute;
		bottom: 0;
		left: 0;
		width:100%;
		height: 5px;
		background-image: linear-gradient(to right,var(--attention-color), var(--bg-color));
	}
`

const Line = styled.p`
	--text-color :${({ theme: { text } }) => text};
	color: var(--text-color)
`

const Section = styled.div`
	--text-color :${({ theme: { text } }) => text};
	color: var(--text-color)
`

const Span = styled.span`
	--text-color :${({ theme: { action } }) => action};
	color:var(--text-color);
`
const CallToAction = styled.span`
	--text-color :${({ theme: { action } }) => action};
	color:var(--text-color);
	margin-left:1em;
	text-transform: uppercase;
`
const Wrapper = styled.div`
	--text-color :${({ theme: { text } }) => text};
	padding:1em;
	color:var(--text-color);
`

const Icon = styled.span`
	margin:0 1em 0 0;
	--text-color :${({ theme: { action } }) => action};
	color:var(--text-color);
`

export default function Showcase(props) {

	let { projectId } = useParams()
	let project = projects[projectId]
	return (
		<Wrapper  >
			<Section>
				<Title  >{project.title}</Title>
				<Line>{project.longDescription}</Line>
			</Section>
			<Section>
				<Subtitle  >motivation</Subtitle>
				<Line>{project.motivation}</Line>
			</Section>
			<Section>
				<Subtitle  >usage</Subtitle>
				{
					project.usage.split("\n").map((line, i) => (
						<Line key={i}>{line}</Line>
					))
				}
			</Section>
			<Section>
				<Subtitle  >TECHNOLOGIES</Subtitle>
				<table>
					<tbody>
						{
							project.tech.map((line, i) => (
								<tr key={i}><td>
									<Icon>
										<FontAwesomeIcon icon="fas fa-bookmark" />
									</Icon>
									{line}
								</td></tr>
							))
						}
					</tbody>
				</table>
			</Section>
			<Section>
				<Subtitle >source code</Subtitle>
				<Link to={project.source[0]} target="_blank" >
					<Span>
						<FontAwesomeIcon icon="fa-brands fa-github" />
						<CallToAction >{project.source[1]}</CallToAction>
					</Span>
				</Link>
			</Section>
		</Wrapper>
	);
}
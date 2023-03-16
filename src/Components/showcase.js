import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import Card from './card';
import projects from '../data/projects';

const Title = styled.h2`
	--text-color :${({ darkmode, colorPalette: { dark, bright } }) => darkmode ? bright : dark};
	padding-bottom: 1em;
	border-bottom: solid 2px  var(--text-color);
	text-transform: uppercase;
`
const Subtitle = styled.h3`
	--text-color :${({ darkmode, colorPalette: { dark, bright } }) => darkmode ? bright : dark};
	padding-bottom: 1em;
	border-bottom: solid 2px  var(--text-color);
	text-transform: uppercase;
`

const Line = styled.p`
`

const Section = styled.div`
`

const CallToAction = styled.span`
	--text-color :${({ colorPalette: { action } }) => action};
	color:var(--text-color);
	margin-left:1em;
	text-transform: uppercase;
`
const Wrapper = styled.div`
	--bg-color :${({ colorPalette }) => colorPalette.neutral}75;
	--text-color :${({ darkmode, colorPalette: { dark, bright } }) => darkmode ? bright : dark};

	color:var(--text-color);
	background: var(--bg-color);
`

export default function Showcase(props) {

	let { projectId } = useParams()
	let project = projects[projectId]
	return (
		<Wrapper colorPalette={props.colorPalette} darkmode={props.darkmode}>
			<Section>
				<Title colorPalette={props.colorPalette} darkmode={props.darkmode}>{project.title}</Title>
				<Line>{project.longDescription}</Line>
			</Section>
			<Section>
				<Subtitle colorPalette={props.colorPalette} darkmode={props.darkmode}>motivation</Subtitle>
				<Line>{project.motivation}</Line>
			</Section>
			<Section>
				<Subtitle colorPalette={props.colorPalette} darkmode={props.darkmode}>usage</Subtitle>
				{
					project.usage.split("\n").map((line, i) => (
						<Line key={i}>{line}</Line>
					))
				}
			</Section>
			<Section>
				<Subtitle colorPalette={props.colorPalette} darkmode={props.darkmode}>TECHNOLOGIES</Subtitle>
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
				<Subtitle colorPalette={props.colorPalette} darkmode={props.darkmode}>source code</Subtitle>
				<Link to={project.source[0]} >
					<FontAwesomeIcon icon="fa-brands fa-github" style={{ color: props.colorPalette.action }} />
					<CallToAction colorPalette={props.colorPalette}>{project.source[1]}</CallToAction>
				</Link>
			</Section>
		</Wrapper>
	);
}
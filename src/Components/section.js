import React from 'react';


import styled, { css } from 'styled-components';


const StyledSection = styled.section`
	--text-color :${({ theme: { text } }) => text};
  position:relative;
  padding: 1.5em ;
  margin:0;
	color:var(--text-color);
`
const Title = styled.h2`
	--text-color :${({ theme: { text } }) => text};
	padding-bottom: 1em;
  margin:0;
	border-bottom: solid 2px rgb(133, 133, 133);
	text-transform: uppercase;
	color:var(--text-color);
`

export default function Section(props) {
	return (
		<StyledSection id={props.id}>
			<Title>{props.title}</Title>
			{props.children}
		</StyledSection>
	)
}
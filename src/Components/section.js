import React from 'react';


import styled, { css } from 'styled-components';


const StyledSection = styled.section`
  position:relative;
  padding:0 0 2em 0;
  margin:0;
`
const Title = styled.h2`
	padding-bottom: 1em;
	border-bottom: solid 2px rgb(133, 133, 133);
	text-transform: uppercase;
`

export default function Section(props) {
	return (
		<StyledSection id={props.id}>
			<Title>{props.title}</Title>
			{props.children}
		</StyledSection>
	)
}
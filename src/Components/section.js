import React from 'react';


import styled, { css } from 'styled-components';
import Title from './title';


const StyledSection = styled.section`
	--text-color :${({ theme: { text } }) => text};
  position:relative;
  padding: 1em ;
  margin:0;
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
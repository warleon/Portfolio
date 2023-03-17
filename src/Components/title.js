
import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
  --bg-color :${({ theme: { background } }) => background}; 
  --attention-color :${({ theme: { attention } }) => attention}; 

	padding-bottom: 1em;
	margin:  1em 0;
	text-transform: uppercase;
	position: relative;

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


export default Title;
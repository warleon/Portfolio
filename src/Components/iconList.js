import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';



const List = styled.ul`
	list-style-type: none;
	padding: 0 1.5em 0 1.5em;
	width: calc(100% - 3em);
	display: flex;
	flex-wrap: wrap;
	flex-direction:column;
	flex-shrink: 1;
	width: auto;
`

const Item = styled.li`
	--text-color :${({ theme: { text } }) => text};
	color:var(--text-color);
	padding: 1em 0;
`

const Spaced = styled.p`
	--text-color :${({ theme: { text } }) => text};
	color:var(--text-color);
	padding: 0 0 0 1em;
	margin: 0;
`

const Span = styled.span`
	--text-color :${({ theme: { action } }) => action};
	color:var(--text-color);
	display:flex;
	flex-wrap:nowrap;
`

export default function IconList(props) {
	return (
		<List>
			{
				props.items.map((item, i) => (
					<Item key={i}>
						<Link to={item.url} target="_blank">
							<Span>
								<FontAwesomeIcon icon={item.icon} />
								<Spaced >{item.text}</Spaced>
							</Span>
						</Link>
					</Item>
				)
				)
			}
		</List>
	)
}
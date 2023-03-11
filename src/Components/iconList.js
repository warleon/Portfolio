import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



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
	padding: 1em 0;
`

const Link = styled.a`
	padding: 0 0 0 1em;
`

export default function IconList(props) {
	return (
		<List>
			{
				props.items.map((item, i) => (
					<Item key={i}>
						<FontAwesomeIcon icon={item.icon} />
						<Link href={item.url}>{item.text}</Link>
					</Item>
				)
				)
			}
		</List>
	)
}
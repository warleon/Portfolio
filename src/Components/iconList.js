import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const List = styled.ul`
list-style-type: none;
`

const Item = styled.li`
display:flex;
`

const Link = styled.a`
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
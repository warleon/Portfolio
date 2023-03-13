import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-auto-columns: max-content;
	overflow-x: auto;
	scroll-snap-type: inline mandatory;
`
const Item = styled.div`
	scroll-snap-align:start;
`

function Roulette(props) {

	return (
		<Wrapper {...props}>
			{props.children.map((child, i) => (
				<Item key={i}>
					{child}
				</Item>
			))}
		</Wrapper>
	)

}
Roulette.defaultProps = {
	direction: "row",
}

export default Roulette
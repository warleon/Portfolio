import React, { useRef } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';


const Wrapper = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-auto-columns: max-content;
	overflow-x: auto;
	scroll-snap-type: inline mandatory;
	gap: 5px;
	padding: 0 5px;
`
const Item = styled.div`
`

function Roulette(props) {
	const wrapper = useRef(null)
	let scroll = 0;
	let changed = false
	const handleScroll = (e) => {
		const dist = 5
		var width = (wrapper.current.scrollWidth / 2) //+ wrapper.current.clientWidth;
		let currScroll = wrapper.current.scrollLeft
		let diff = currScroll - scroll
		if (diff > 0) {
			if (currScroll >= width - dist && !changed) {
				wrapper.current.scrollLeft = dist
				changed = true;
			} else
				changed = false;
		}
		if (diff < 0) {
			if (currScroll <= dist && !changed) {
				wrapper.current.scrollLeft = width - dist
				changed = true;
			} else
				changed = false;
		}
		scroll = currScroll
	}
	const renderChildren = () => (
		props.children.map((child, i) => (
			<Item key={i}>
				{child}
			</Item>
		)
		)
	)

	return (
		// <Wrapper {...props} ref={wrapper} onScroll={handleScroll}>
		<Wrapper {...props}>
			{renderChildren()}
			{/* {renderChildren()} */}
		</Wrapper >
	)

}
Roulette.defaultProps = {
	direction: "row",
}

export default Roulette
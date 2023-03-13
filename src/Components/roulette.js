import React, { useRef } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-auto-columns: max-content;
	overflow-x: auto;
	scroll-snap-type: inline mandatory;
`
const Item = styled.div`
`

function Roulette(props) {
	const wrapper = useRef(null)
	let scroll = 0;
	let changed = false
	const handleScroll = (e) => {
		const dist = 5
		var width = wrapper.current.scrollWidth - wrapper.current.clientWidth;
		let currScroll = wrapper.current.scrollLeft
		let diff = currScroll - scroll
		if (diff > 0) {
			// console.log([scroll, currScroll, diff, width, "scrolling right"])
			if (currScroll >= width - dist && !changed) {
				wrapper.current.scrollLeft = dist
				changed = true;
			} else
				changed = false;
		}
		if (diff < 0) {
			// console.log([scroll, currScroll, diff, width, "scrolling left"])
			if (currScroll <= dist && !changed) {
				wrapper.current.scrollLeft = width - dist
				changed = true;
			} else
				changed = false;
		}
		scroll = currScroll
	}
	return (
		<Wrapper {...props} ref={wrapper} onScroll={handleScroll}>
			{props.children.map((child, i) => {
				return <Item key={i}>
					{child}
				</Item>
			}
			)}
		</Wrapper >
	)

}
Roulette.defaultProps = {
	direction: "row",
}

export default Roulette
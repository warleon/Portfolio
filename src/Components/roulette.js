import React, { useRef } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-auto-columns: max-content;
	overflow-x: auto;
	scroll-snap-type: inline mandatory;
`
const ItemStart = styled.div`
	scroll-snap-align:start;
`
const ItemEnd = styled.div`
	scroll-snap-align:end;
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
			console.log([scroll, currScroll, diff, width, "scrolling right"])
			if (currScroll >= width - dist && !changed) {
				wrapper.current.scrollLeft = 0
				changed = true;
			} else
				changed = false;
		}
		if (diff < 0) {
			console.log([scroll, currScroll, diff, width, "scrolling left"])
			if (currScroll <= dist && !changed) {
				wrapper.current.scrollLeft = width
				changed = true;
			} else
				changed = false;
		}
		scroll = currScroll
	}
	return (
		<Wrapper {...props} ref={wrapper} onScroll={handleScroll}>
			{props.children.map((child, i) => {
				if (i == props.children.length - 1)
					return <ItemEnd key={i} >
						{child}
					</ItemEnd>
				return <ItemStart key={i}>
					{child}
				</ItemStart>
			}
			)}
		</Wrapper >
	)

}
Roulette.defaultProps = {
	direction: "row",
}

export default Roulette
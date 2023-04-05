import React from "react"
import styled from "styled-components"


const Wrapper = styled.div`
padding: 0 1.5em;
	background-color: ${({ theme: { background } }) => background};
`

export default Wrapper
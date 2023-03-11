import React, { Component, Fragment } from 'react'
import GetInTouch from './Components/getInTouch'
import ProjectCard from './Components/projectCard';
import { Routes, Route } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'


import styled from 'styled-components';
import NormalStyle from './NormalStyle'

library.add(fab)

const GlobalStyle = styled(NormalStyle)`
*{
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 12pt;
	color: #${props => props.dark ? "ffffff" : "000000"};
}

h1, h2, h3, h4, h5, h6 {
  font-family: Raleway, Helvetica, sans-serif;
    font-weight: 700;
    letter-spacing: 0.1em;
    margin: 0 0 1em 0;
    text-transform: uppercase;
}

`

class App extends Component {

  render() {
    return (
      <Fragment >
        <GlobalStyle />
        <Routes>
          <Route path="projects/:id" element={ProjectCard} />
        </Routes>
        <footer>
          <section id="footer">
            <GetInTouch></GetInTouch>
          </section >
        </footer>
      </Fragment>
    )
  }
}

export default App

import React, { Component, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';
import NormalStyle from './NormalStyle'
import Section from './Components/section';
import Card from './Components/card';
import Roulette from './Components/roulette';
import GetInTouch from './Components/getInTouch'
import projects from './data/projects';
import Showcase from './Components/showcase';

library.add(fab, fas)

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
function createMapping(obj, func) {
  let arr = Array()
  let i = 0
  for (const [key, value] of Object.entries(obj)) {
    arr.push(func(key, value, i))
    i++
  }
  return arr
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      project: projects[0]
    }
  }
  render() {
    return (
      <Fragment >
        <GlobalStyle />
        <Section title="my projects" id="">
          <Roulette>
            {
              createMapping(projects, (id, card, i) => (
                <Card {...card} key={i} />
              ))
            }
          </Roulette>
          <Routes>
            <Route path="projects/:projectId" element={<Showcase />} />
          </Routes>
        </Section>
        <Section title="get in touch" id="">
          <GetInTouch></GetInTouch>
        </Section>
      </Fragment>
    )
  }
}

export default App

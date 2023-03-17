import React, { Component, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons';

import styled, { ThemeProvider } from 'styled-components';
import NormalStyle from './NormalStyle'
import Section from './Components/section';
import Card from './Components/card';
import Roulette from './Components/roulette';
import GetInTouch from './Components/getInTouch'
import projects from './data/projects';
import Showcase from './Components/showcase';

import video from './Assets/berserk.webm'
import BackgroundVideo from './Components/backgroundVIdeo';
import ColorPalettes from './Assets/colorPalette';

library.add(fab, fas)

const GlobalStyle = styled(NormalStyle)`
*{
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 12pt;
	color: #${({ theme: { text } }) => text};
}

h1, h2, h3, h4, h5, h6 {
  font-family: Raleway, Helvetica, sans - serif;
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


const Wrapper = styled.div`
padding: 0 1.5em;
`



class App extends Component {
  constructor() {
    super()
    this.state = {
      colorPalette: ColorPalettes[0],
    }
  }

  render() {
    return (
      <Fragment >
        <ThemeProvider theme={this.state.colorPalette}>
          <GlobalStyle />

          <Wrapper>
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
              <BackgroundVideo playsInline autoPlay muted loop>
                <source src={video} type="video/webm" />
              </BackgroundVideo>
              <GetInTouch ></GetInTouch>
            </Section>
          </Wrapper>
        </ThemeProvider>
      </Fragment>
    )
  }
}

export default App

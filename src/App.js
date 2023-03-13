import React, { Component, Fragment } from 'react'
import GetInTouch from './Components/getInTouch'
import ProjectCard from './Components/card';
import { Routes, Route } from 'react-router-dom'
import placeholder from './Assets/placeholderImg.jpg'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'


import styled from 'styled-components';
import NormalStyle from './NormalStyle'
import Section from './Components/section';
import Card from './Components/card';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Roulette from './Components/roulette';

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

class App extends Component {
  render() {
    const projects = [
      {
        url: "",
        img: placeholder,
        imgText: "",
        title: "video app",
        description: "A containerized video app made using django and ffmpeg.",
        call: "learn more"
      },
      {
        url: "",
        img: placeholder,
        imgText: "",
        title: "video app",
        description: "A containerized video app made using django and ffmpeg.",
        call: "learn more"
      },
      {
        url: "",
        img: placeholder,
        imgText: "",
        title: "video app",
        description: "A containerized video app made using django and ffmpeg.",
        call: "learn more"
      },
      {
        url: "",
        img: placeholder,
        imgText: "",
        title: "video app",
        description: "A containerized video app made using django and ffmpeg.",
        call: "learn more"
      },
      {
        url: "",
        img: placeholder,
        imgText: "",
        title: "video app",
        description: "A containerized video app made using django and ffmpeg.",
        call: "learn more"
      },
      {
        url: "",
        img: placeholder,
        imgText: "",
        title: "video app",
        description: "A containerized video app made using django and ffmpeg.",
        call: "learn more"
      },
      {
        url: "",
        img: placeholder,
        imgText: "",
        title: "video app",
        description: "A containerized video app made using django and ffmpeg.",
        call: "learn more"
      },
    ]

    return (
      <Fragment >
        <GlobalStyle />
        {/* <Routes>
          <Route path="projects/:id" element={ProjectCard} />
        </Routes> */}
        <Section title="my projects" id="">
          <Roulette>
            {
              projects.map((card, i) => (
                <Card {...card} key={i} />
              ))
            }
          </Roulette>
        </Section>
        <Section title="get in touch" id="">
          <GetInTouch></GetInTouch>
        </Section>
      </Fragment>
    )
  }
}

export default App

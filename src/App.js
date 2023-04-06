import React, { Component, Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import styled, { ThemeProvider } from 'styled-components';
import NormalStyle from './NormalStyle'

import ColorPalettes from './Assets/colorPalette';

import ProjectPage from './Pages/project';
import MainPage from './Pages/main';

library.add(fab, fas);

const GlobalStyle = styled(NormalStyle)`
  * {
    --text-color: ${({ theme: { text } }) => text};
    --bg-color: ${({ theme: { background } }) => background};
    --action-color: ${({ theme: { action } }) => action};
    --neutral-color: ${({ theme: { neutral } }) => neutral};
    --attention-color: ${({ theme: { attention } }) => attention};
    --gradient: linear-gradient(
      to right,
      var(--attention-color),
      var(--bg-color)
    );

  margin: 0;
  padding: 0;
  border: 0;
  font-size: 12pt;
	color: var(--text-color);
}
h1, h2, h3, h4, h5, h6 {
  font-family: Raleway, Helvetica, sans - serif;
  font-weight: 700;
  letter-spacing: 0.1em;
  margin: 0 0 1em 0;
  text-transform: uppercase;
}

&::-webkit-scrollbar{
  width: 10px;
  height: 10px;
}
&::-webkit-scrollbar-track {
  background-color:var(--bg-color);
  padding:10px
}
&::-webkit-scrollbar-thumb {
  background: var(--neutral-color); 
  border-radius:5px;
}
&::-webkit-scrollbar-thumb:hover {
background: var(--text-color); 
} 
`


class App extends Component {
  constructor() {
    super();
    this.state = {
      colorPalette: ColorPalettes[1],
    };
  }

  render() {
    return (
      <Fragment>
        <ThemeProvider theme={this.state.colorPalette}>
          <GlobalStyle />
          <Routes>
            <Route path="projects/:projectId" element={<ProjectPage />} />
            <Route path="/" element={<MainPage />} />
          </Routes>
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default App;

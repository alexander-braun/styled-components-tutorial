import React from 'react';
import './App.css'
import styled from 'styled-components'
import { Buttons, SearchBar } from './styles/elements.js'
import SearchIcon from './svg/search.svg'

const Container = styled.div`
  width: 1280px;
  min-width: 1280px;
  margin: 0 auto;
  .row {
    width: 100%;
    display: flex;
    align-items: center;
  }
`
const Subhead = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin: 160px 0 48px;
`

function App() {
  return (
    <div className="App">
      <Container>
        <Subhead>Buttons</Subhead>
        <div className="row">
          <Buttons>Playlist</Buttons>
          <Buttons outline>Playlist</Buttons>
          <Buttons primary>Playlist</Buttons>
          <Buttons secondary>Playlist</Buttons>
        </div>
        <Subhead>Searchbar</Subhead>
        <div className="row">
          <SearchBar squared>
            <img src={SearchIcon} alt="search icon"/>
            <input placeholder="Search for podcasts, news, stories, etc."/>
          </SearchBar>
        </div>
      </Container>
    </div>
  );
}

export default App;

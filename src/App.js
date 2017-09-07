import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainPage from './Components/MainPage'
import FeaturedRestaurant from './Components/FeaturedRestaurant'
import styled from 'styled-components'

const AppContainer = styled.div`
  width: 50%;
  margin: 20px auto;
`

const ContentContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`

const App = () =>
  <Router>
    <AppContainer>
      <ContentContainer>
        <Route path="/featured/:placeID" component={FeaturedRestaurant} />
        <Route path="/(:filter)" component={MainPage} />
      </ContentContainer>
    </AppContainer>
  </Router>

export default App

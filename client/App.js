import React from "react";
import { useState } from "react";
import { Routes, Route, Switch } from 'react-router-dom'
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import ClimbsContainer from "./components/ClimbsContainer.jsx";
import {styled, createGlobalStyle} from "styled-components";
import { BrowserRouter } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
:root {
  --main-font: 'Roboto', sans-serif;
}
`

const App = () => {

const [isLoggedIn, setIsLoggedIn] = useState(false);

  return ( 
  <WelcomeWrapper>
   <GlobalStyle/>
   <BrowserRouter basename="/">
    <Routes>
      <Route path='/' element= { <Login/> } />
      <Route path='/signup' element= { <Signup/> } />
      <Route path='/home' element= { <ClimbsContainer/> } />
    </Routes>
    </BrowserRouter>
  </WelcomeWrapper>
  )
}

const WelcomeWrapper = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: var(--main-font);
`

export default App;
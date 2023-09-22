import React from "react";
import { useState } from "react";
import Login from "./components/Login.jsx";
import ClimbsContainer from "./components/ClimbsContainer.jsx";
import styled from "styled-components";

const App = () => {

const [isLoggedIn, setIsLoggedIn] = useState(true);

  return ( 
  <WelcomeWrapper>
    { isLoggedIn === true ? 
    <ClimbsContainer/> : <Login/> }
  </WelcomeWrapper>
  )
}

const WelcomeWrapper = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export default App;
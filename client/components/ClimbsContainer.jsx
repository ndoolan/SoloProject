import React from 'react'
import styled from 'styled-components'
import ClimbDisplay from './ClimbDisplay.jsx'
import ClimbsButtons from './ClimbsButtons.jsx'
import Logout from './Logout.jsx'
import {Routes, Route} from 'react-router-dom'
import ClimbStats from './ClimbStats.jsx'
import CreateClimb from './CreateClimb.jsx'



const ClimbsContainer = () => {
  return (
    <MainContainer>
        <DisplayContainer>
           <ClimbDisplay/>
        </DisplayContainer>
        
        <ClimbsButtons/>
        <Logout/>
    </MainContainer>
  )
}

const MainContainer = styled.div`
display: flex;
flex-direction: column; 
align-items: center;
background: rgb(161,91,64);
height: 600px;
width: 350px;
border: 1px solid black;
border-radius: 7px;
`

const DisplayContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 301px;
width: 301px;
border: 1px solid black;
border-radius: 7px;
background: white;
margin: 20px;
`

export default ClimbsContainer
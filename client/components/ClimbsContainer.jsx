import React from 'react'
import styled from 'styled-components'
import ClimbDisplay from './ClimbDisplay.jsx'
import ClimbsButtons from './ClimbsButtons.jsx'
import Logout from './Logout.jsx'


const ClimbsContainer = () => {
  return (
    <MainContainer>
        <ClimbDisplay/>
        <ClimbsButtons/>
        <Logout/>
    </MainContainer>
  )
}

const MainContainer = styled.div`
display: flex;
flex-direction: column; 
align-items: center;

height: 600px;
width: 350px;
border: 1px solid black;
border-radius: 7px;
`

export default ClimbsContainer
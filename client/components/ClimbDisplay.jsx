import React from 'react'
import styled from 'styled-components'
import IndividualClimb from './IndividualClimb.jsx'
import { usegetTotalClimbsQuery } from '../apiSlice.js'
import totalClimbs from '../totalClimbs.js'

const ClimbDisplay = () => {

  return (
    <Display>
        <h1>Climbs Go Here</h1>
    </Display>
  )
}

const Display = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 300px;
width: 300px;
border: 1px solid black;
border-radius: 7px;
background: white;
margin: 20px;
`

export default ClimbDisplay
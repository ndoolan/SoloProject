import React from 'react'
import styled from 'styled-components'

const ClimbsButtons = () => {
  return (
    <Container>
        <button>All</button>
        <button>Sort By Grade</button>
        <button>Sort By Location</button>
        <button>Stats</button>
        <button>Log Climb</button>
    </Container>
  )
}

const Container = styled.div`
display: flex;
flex-direction: column;
background: red;
height: 125px;
width: 150px;
border: 1px solid black;
gap: 10px;
padding: 10px;
`


export default ClimbsButtons
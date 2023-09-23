import React from 'react'
import styled from 'styled-components'

const Logout = () => {
  return (
    <div>
        <LogoutButton>Logout</LogoutButton>
    </div>
  )
}

const LogoutButton = styled.button`
background: white;
color: black;
padding: 5px;
margin: 20px;
`


export default Logout
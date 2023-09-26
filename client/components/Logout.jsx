import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate()

  return (
    <div>
        <LogoutButton onClick={()=> navigate('/') }>Logout</LogoutButton>
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
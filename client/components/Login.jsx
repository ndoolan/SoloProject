import React from 'react'
import styled from 'styled-components'


const Login = () => {
  return (
    <LoginWrapper>
        <WelcomeBanner>
            <h1>Bruh...?</h1>
        </WelcomeBanner>
        <Credentials>
            <input type="text" id="username" placeholder="username"/>
            <input type="password" id="password" placeholder="password"/>
            <button name="login" >Chalk Up?</button>
        </Credentials>
    </LoginWrapper>
  )
}

const LoginWrapper = styled.div `
display: flex; 
flex-direction: column;
justify-content: space-around;
align-items: center;
border: 1px solid black;
border-radius: 7px;
width: 350px;
height: 600px;
background-image: url("https://images.unsplash.com/photo-1593132517397-ceb31d77194a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2564&q=80");
background-size: cover;
background-repeat: no-repeat;
`

const WelcomeBanner = styled.div `
display: flex;
flex-direction: column;
border: 1px solid black;
border-radius: 7px;
width: 350px;
h1{
    text-align: center;
}
background-image: url("public/outside.jpg");
`
const Credentials = styled.div `
display: flex;
flex-direction: column;
border: 1px solid black;
border-radius: 7px;
background: grey;
width: 225px;
padding: 30px;
gap: 10px;
`
export default Login;
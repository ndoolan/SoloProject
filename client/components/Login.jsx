import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { createUserName, createPassword } from '../userSlice'




const Login = () => {
  const dispatch = useDispatch();
  const { username, password } = useSelector(state=> state.user)

  const submitLogin = () => {
    axios.post('http://localhost:3000/', {'username': username, 'password': password})
      .then(data => console.log(data))
      .catch(err => console.log(err))

  }


  return (
    <LoginWrapper>
        <WelcomeBanner>
            <h1>Ticklist</h1>
        </WelcomeBanner>
        <Credentials>
            <LoginInput type="text" id="username" placeholder="username" onChange={(e) => {
              dispatch(createUserName(e.target.value));
              }
            }
            />
            <LoginInput type="password" id="password" placeholder="password" onChange={(e)=>{
              dispatch(createPassword(e.target.value));
              }
            }
            />
            <LoginSubmit name="login" onClick={ submitLogin } >Chalk Up?</LoginSubmit>
            <Link to="signup">Click to sign up!</Link>
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
background-image: url("https://images.unsplash.com/photo-1620578503205-f9ad8c4d50c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80");
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
border: 1px solid white;
border-radius: 7px;
background: white opacity: 1;
width: 225px;
padding: 30px;
gap: 10px;
`

const LoginSubmit = styled.button`
background: white;
text-align: center;
border-radius: 7px;
border: 1px solid white;
align-items: center;
justify-contet: center;
`
const LoginInput = styled.input`
background: white;
border: 1px solid white;
border-radius: 7px
`
export default Login;
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createUserName, createPassword, login } from '../userSlice'
import axios from 'axios'

const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { username, password } = useSelector(state=> state.user)
  // const 
  const sendCredentials = async () => {
    const { data } = await axios.post(
      '/signup', {'username': username, 'password': password}, {withCredentials:true})

    console.log(data)
    if(data == 'true'){
     dispatch(login(data))
     navigate('/home')
    } else {
     dispatch(login('false'))
     // console.log(loggedIn)
    }
  }
  

  return (
    <SignupWrapper>
        <Header>Sign Up</Header>
        <Credentials>
        <SignUpInput type="text" name="username" id="username" placeholder="username" onChange={(e)=>{
            dispatch(createUserName(e.target.value));
        }}/>
        <SignUpInput type="password" name="password" id="password" placeholder="password" onChange={(e)=>{
            dispatch(createPassword(e.target.value))
        }}/>
        <SignUpSubmit name="signup" onClick={sendCredentials}>Submit</SignUpSubmit>
        <Link to="/">Back</Link>
        </Credentials>
    </SignupWrapper>
  )
}

const SignupWrapper = styled.div `
display: flex; 
flex-direction: column;
justify-content: space-around;
align-items: center;
border: 1px solid black;
border-radius: 25px;
width: 350px;
height: 600px;
background-image: url("https://images.unsplash.com/photo-1601224748193-d24f166b5c77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9jayUyMGNsaW1iaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=600");
background-size: cover;
background-repeat: no-repeat;
`

const Credentials = styled.div `
display: flex;
flex-direction: column;
border-radius: 25px;
background-color: grey opacity: 0.6;
width: 225px;
padding: 30px;
gap: 10px;
`
const SignUpSubmit = styled.button`
background: white;
text-align: center;
border-radius: 25px;
border: 1px solid white;
align-items: center;
justify-contet: center;
padding: 5px;
cursor: pointer;
&:hover {
  background: rgb(222, 228, 237);
}
`

const SignUpInput = styled.input`
background: white;
border: 1px solid white;
border-radius: 25px
padding: 5px;
`
const Header = styled.h1`
display: flex;
color: white;
`

export default Signup
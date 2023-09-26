import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createUserName, createPassword } from '../userSlice'
import axios from 'axios'

const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { username, password } = useSelector(state=> state.user)
  // const 
  const sendCredentials = () => {
    console.log(username, password);
    axios.post('http://localhost:3000/signup', {'username': username, 'password': password})
        .then(data => console.log(data))
        .catch(err => console.log(err))
  }
  

  return (
    <SignupWrapper>
        Signup
        <Credentials>
        <input type="text" name="username" id="username" placeholder="username" onChange={(e)=>{
            dispatch(createUserName(e.target.value));
        }}/>
        <input type="password" name="password" id="password" placeholder="password" onChange={(e)=>{
            dispatch(createPassword(e.target.value))
        }}/>
        <button name="signup" onClick={sendCredentials}>Submit</button>
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
border-radius: 7px;
width: 350px;
height: 600px;
background-image: url("https://images.unsplash.com/photo-1601224748193-d24f166b5c77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9jayUyMGNsaW1iaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=600");
background-size: cover;
background-repeat: no-repeat;
`

const Credentials = styled.div `
display: flex;
flex-direction: column;
border: 1px solid black;
border-radius: 7px;
background-color: grey opacity: 0.6;
width: 225px;
padding: 30px;
gap: 10px;
`

export default Signup
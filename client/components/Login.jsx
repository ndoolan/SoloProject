import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch, useEffect } from 'react-redux'
import axios from 'axios'
import { createUserName, createPassword, login } from '../userSlice'
import { useNavigate } from 'react-router-dom'

// login: (state, action) => {
//   state.loggedIn = true;
// },
// logout: (state,action) => {
//   state.loggedIn = false;
// }


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username, password, loggedIn } = useSelector(state=> state.user)


// CORRECT ASYNC POST
  // const submitLogin = () => {
  //   axios.post('http://localhost:3000/', {'username': username, 'password': password})
  //     .then(data => console.log(data))
  //     .catch(err => console.log(err))

  // }
 

  // TESTING CORS / CREDENTIALS 
  // ORIGINAL LOGIN REQUEST USING AXIOS
  const submitLogin = async () => {
    const { data } = await axios.post(
      '/', {'username': username, 'password': password}, {withCredentials:true})
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
border-radius: 25px;
width: 350px;
height: 600px;
background-image: url("https://images.unsplash.com/photo-1620578503205-f9ad8c4d50c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80");
background-size: cover;
background-repeat: no-repeat;
font-family: var(--main-font);
`

const WelcomeBanner = styled.div `
display: flex;
flex-direction: column;
border-radius: 25px;
width: 350px;
h1{
    text-align: right;
    margin: 0px 45px;
}
background-image: url("public/outside.jpg");
`
const Credentials = styled.div `
display: flex;
flex-direction: column;
border: 1px solid white;
border-radius: 25px;
background: rgb(172,187,209) opacity: .2;
width: 225px;
padding: 30px;
gap: 10px;
`

const LoginSubmit = styled.button`
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
const LoginInput = styled.input`
background: white;
border: 1px solid white;
border-radius: 25px
padding: 5px;
`
export default Login;
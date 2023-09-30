import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch, useEffect } from "react-redux";
import axios from "axios";
import { createUserName, createPassword, login } from "../userSlice";
import { useNavigate } from "react-router-dom";

// login: (state, action) => {
//   state.loggedIn = true;
// },
// logout: (state,action) => {
//   state.loggedIn = false;
// }

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username, password, loggedIn } = useSelector((state) => state.user);

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
      "/",
      { username: username, password: password },
      { withCredentials: true },
    );
    console.log(data);
    if (data == "true") {
      dispatch(login(data));
      navigate("/climbs");
    } else {
      dispatch(login("false"));
      // console.log(loggedIn)
    }
  };

  return (
    <LoginWrapper>
      <WelcomeBanner>
        <ChalkTitle>ChalkUp</ChalkTitle>
      </WelcomeBanner>
      <Credentials>
        <LoginInput
          type="text"
          id="username"
          placeholder="username"
          onChange={(e) => {
            dispatch(createUserName(e.target.value));
          }}
        />
        <LoginInput
          type="password"
          id="password"
          placeholder="password"
          onChange={(e) => {
            dispatch(createPassword(e.target.value));
          }}
        />
        <LoginSubmit name="login" onClick={submitLogin}>
          Log In
        </LoginSubmit>
        <StyledLink to="signup">Click to Sign Up!</StyledLink>
      </Credentials>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  border-radius: 25px;
  width: 350px;
  height: 600px;
  background-image: url("https://i.pinimg.com/236x/f9/16/be/f916be3e865b0307124a523f75a864f5--chalk-rock-shoe-photography.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  font-family: var(--main-font);
`;

const WelcomeBanner = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  width: 350px;
  h1 {
    text-align: center;
  }
  background-image: url("public/outside.jpg");
`;
const Credentials = styled.div`
display: flex;
flex-direction: column;
border-radius: 25px;
background: rgb(172,187,209, .9);
width: 225px;
padding: 30px;
gap: 10px;
`;

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
`;
const LoginInput = styled.input`
background: white;
border: 1px solid white;
border-radius: 25px
padding: 5px;
`;

const ChalkTitle = styled.h1`
color: white;
font-size: 45px
`

const StyledLink = styled(Link)`
color: black;
text-align: right;
`
export default Login;

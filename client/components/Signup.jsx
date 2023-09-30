import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUserName, createPassword, login } from "../userSlice";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { username, password } = useSelector((state) => state.user);
  // const
  const sendCredentials = async () => {
    const { data } = await axios.post(
      "/signup",
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
    <SignupWrapper>
      <Header>Sign Up</Header>
      <Credentials>
        <SignUpInput
          type="text"
          name="username"
          id="username"
          placeholder="username"
          onChange={(e) => {
            dispatch(createUserName(e.target.value));
          }}
        />
        <SignUpInput
          type="password"
          name="password"
          id="password"
          placeholder="password"
          onChange={(e) => {
            dispatch(createPassword(e.target.value));
          }}
        />
        <SignUpSubmit name="signup" onClick={sendCredentials}>
          Sign Up
        </SignUpSubmit>
        <StyledLink to="/">Back</StyledLink>
      </Credentials>
    </SignupWrapper>
  );
};

const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  border-radius: 25px;
  width: 350px;
  height: 600px;
  background-image: url("https://cdn.climbing.com/wp-content/uploads/2021/08/matt-2-scaled-e1621260854432.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
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
const SignUpSubmit = styled.button`
  background: white;
  text-align: center;
  border-radius: 25px;
  border: 1px solid white;
  padding: 5px;
  cursor: pointer;
  &:hover {
    background: rgb(222, 228, 237);
  }
`;

const SignUpInput = styled.input`
background: white;
border: 1px solid white;
border-radius: 25px
padding: 5px;
`;
const Header = styled.h1`
  display: flex;
  color: white;
`;

const StyledLink = styled(Link)`
color: black;
text-align: right;
`

export default Signup;

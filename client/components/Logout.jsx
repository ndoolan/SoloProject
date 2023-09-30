import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  return (
    <LogoutDiv>
      <LogoutButton onClick={() => navigate("/")}>Logout</LogoutButton>
    </LogoutDiv>
  );
};

const LogoutDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
width: 100%;
margin: 3px;
`

const LogoutButton = styled.button`
  background: white;
  text-align: center;
  border-radius: 20px;
  width: 80px;
  justify-content: center;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background: rgb(222, 228, 237);
  }
`;


export default Logout;

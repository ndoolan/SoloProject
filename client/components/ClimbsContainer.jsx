import React from "react";
import styled from "styled-components";
import ClimbDisplay from "./ClimbDisplay.jsx";
import ClimbsButtons from "./ClimbsButtons.jsx";
import Logout from "./Logout.jsx";
import { Routes, Route } from "react-router-dom";
import ClimbStats from "./ClimbStats.jsx";
import CreateClimb from "./CreateClimb.jsx";
import IndividualClimb from "./IndividualClimb.jsx";

const ClimbsContainer = () => {
  return (
    <MainContainer>
      <DisplayContainer>
        <ClimbDisplay />
      </DisplayContainer>

      <ClimbsButtons />
      <Logout />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(220, 174, 137);
  box-shadow: 10px 10px 5px grey;
  height: 600px;
  width: 350px;
  border: 1px solid black;
  border-radius: 25px;
`;

const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 301px;
  width: 301px;
  overflow: scroll;
  border: 1px solid black;
  border-radius: 25px;
  background: rgb(222, 228, 237);
  margin: 20px;
`;

//rgb(222, 228, 237)

export default ClimbsContainer;

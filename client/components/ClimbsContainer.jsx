import React from "react";
import styled from "styled-components";
import ClimbDisplay from "./ClimbDisplay.jsx";
import ClimbsButtons from "./ClimbsButtons.jsx";
import Logout from "./Logout.jsx";
import { Routes, Route } from "react-router-dom";
import ClimbStats from "./ClimbStats.jsx";
import CreateClimb from "./CreateClimb.jsx";
import IndividualClimb from "./IndividualClimb.jsx";
import { useSelector } from "react-redux";
import { createClimb } from '../userSlice'

const ClimbsContainer = () => {
  const { createClimb : toggle } = useSelector(state => state.user)
 
  return (
    <MainContainer>
      <Logout />
      <DisplayContainer>
        {toggle ? <ClimbDisplay/> : <CreateClimb/>}
       
      </DisplayContainer>
      <ClimbsButtons toggle = {toggle}/>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://www.ispo.com/sites/default/files/2021-08/Bouldern_Frau_Outdoor.jpg');
  background-size: cover;
  height: 600px;
  width: 350px;
  border: 1px solid black;
  border-radius: 25px;
`;
// brown
// rgb(220, 174, 137)
const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 301px;
  width: 281px;
  overflow: scroll;
  border-radius: 25px;
  background: rgb(222, 228, 237, .9);
  margin: 15px;
  padding: 10px;
  gap: 10px;
`;
//blue
//rgb(222, 228, 237)



export default ClimbsContainer;

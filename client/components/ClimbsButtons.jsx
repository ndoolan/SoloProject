import React from "react";
import styled from "styled-components";
import axios from "axios";
import { setTotalClimbs } from "../climbSlice";

const ClimbsButtons = () => {
  // read and setting the total climbs in state so it can be rendered
  const getTotalClimbs = async () => {
    const { data } = await axios.get("/home", { withCredentials: true });
    console.log(data);
  };

  return (
    <Container>
      <ClimbFilterButton onClick={getTotalClimbs}>All</ClimbFilterButton>
      <ClimbFilterButton>Sort By Grade</ClimbFilterButton>
      <ClimbFilterButton>Sort By Location</ClimbFilterButton>
      <ClimbFilterButton>Stats</ClimbFilterButton>
      <ClimbFilterButton>Log Climb</ClimbFilterButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(222, 228, 237);
  height: 165px;
  width: 165px;
  border: 1px solid black;
  border-radius: 20px;
  gap: 10px;
  padding: 10px;
`;

const ClimbFilterButton = styled.button`
  background: white;
  text-align: center;
  border-radius: 20px;
  border: 1px solid white;
  box-shadow: 3px 3px 1px grey;
  align-items: center;
  justify-contet: center;
  padding: 2px;
  cursor: pointer;
  &:hover {
    background: rgb(172, 187, 209);
  }
`;

export default ClimbsButtons;

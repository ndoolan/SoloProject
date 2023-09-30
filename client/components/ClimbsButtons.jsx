import React from "react";
import styled from "styled-components";
import axios from "axios";
import { setTotalClimbs } from "../totalClimbs";
import { useDispatch } from "react-redux";

const ClimbsButtons = ( { showClimbs }) => {
  // read and setting the total climbs in state so it can be rendered
const dispatch = useDispatch()

  const getTotalClimbs = async () => {
    const { data } = await axios.get("/home", { withCredentials: true });
    dispatch(setTotalClimbs(data));
  };

  return (
    <Container>
      <ClimbFilterButton onClick={getTotalClimbs}>All</ClimbFilterButton>
      <ClimbFilterButton>Sort By Grade</ClimbFilterButton>
      <ClimbFilterButton>Sort By Location</ClimbFilterButton>
      <ClimbFilterButton>Stats</ClimbFilterButton>
      <ClimbFilterButton onClick={showClimbs()}>Log Climb</ClimbFilterButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(222, 228, 237, .9);
  height: 180px;
  width: 260px;
  border-radius: 20px;
  gap: 10px;
  padding: 10px;
`;

const ClimbFilterButton = styled.button`
  background: white;
  width: 225px;
  text-align: center;
  border-radius: 20px;
  border: 1px solid white;
  align-items: center;
  justify-contet: center;
  padding: 2px;
  cursor: pointer;
  &:hover {
    background: rgb(69, 69, 69);
    color: white;
  }
`;

export default ClimbsButtons;

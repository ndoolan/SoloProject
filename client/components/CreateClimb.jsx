import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  setClimbName,
  setGrade,
  setLocation,
  setTotalClimbs,
} from "../totalClimbs";
import axios from "axios";

const CreateClimb = () => {
  const dispatch = useDispatch();
  const { name, grade, location, totalClimbs } = useSelector(
    (state) => state.climbsReducer,
  );

  // Creating a new climb and updating total Climbs state
  const sendNewClimb = async () => {
    const { data } = await axios.post(
      "/home",
      { name: name, grade: grade, location: location },
      { withCredentials: true },
    );
    dispatch(setTotalClimbs(data));
  };
  // setting total climbs array has bugs

  return (
    <CreateDisplay>
      <input
        type="text"
        id="name"
        placeholder="name"
        onChange={(e) => {
          console.log(e.target.value);
          dispatch(setClimbName(e.target.value));
        }}
      />
      <input
        type="text"
        id="grade"
        placeholder="grade"
        onChange={(e) => {
          dispatch(setGrade(e.target.value));
        }}
      />
      <input
        type="text"
        id="location"
        placeholder="location"
        onChange={(e) => {
          dispatch(setLocation(e.target.value));
        }}
      />
      <SubmitButton name="createClimb" onClick={sendNewClimb}>
        Submit
      </SubmitButton>
    </CreateDisplay>
  );
};

const CreateDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 300px;
  border-radius: 7px;
  margin: 20px;
  gap: 5px;
`;

const SubmitButton = styled.button`
  background: white;
  width: 150px;
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


//background-image: url(https://www.desertsun.com/gcdn/presto/2019/09/20/PPAS/df245152-df77-4372-b31a-e055f81fb862-climbing-jtree1.jpeg?width=1320&height=882&fit=crop&format=pjpg&auto=webp)
//https://www.desertsun.com/gcdn/presto/2019/09/20/PPAS/df245152-df77-4372-b31a-e055f81fb862-climbing-jtree1.jpeg?width=1320&height=882&fit=crop&format=pjpg&auto=webp

export default CreateClimb;

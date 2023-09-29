import React from "react";
import styled from "styled-components";
import IndividualClimb from "./IndividualClimb.jsx";
import { useSelector } from "react-redux";
import totalClimbs from "../totalClimbs.js";

const ClimbDisplay = () => {
  // const {totalClimbs} = useSelector(state=> state.climbsReducer)
  const totalClimbs = [
    { name: "first", climbId: 11 },
    { name: "second", climbId: 12 },
    { name: "third", climbId: 13 },
    { name: "fourth", climbId: 14 },
    { name: "fifth", climbId: 15 },
  ];

  return (
    <>
      {totalClimbs.map((climb) => {
        return <IndividualClimb name={climb.name} key={climb.climbId} />;
      })}
    </>
  );
};

const Display = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 300px;
  border: 1px solid black;
  border-radius: 7px;
  background: white;
  margin: 20px;
  overflow: "scroll";
`;

export default ClimbDisplay;

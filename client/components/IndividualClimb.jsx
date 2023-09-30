import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const IndividualClimb = ({ name, key, grade, location }) => {
  const { totalClimbs } = useSelector((state) => state.climbsReducer);

  return (
    <SingleClimbContainer key={key}>
      <p>Name: {name} </p>
      <p>Grade: {grade} </p>
      <p>Location: {location} </p>
    </SingleClimbContainer>
  );
};

const SingleClimbContainer = styled.div`
display: flex;
flex-direction: column;
height: auto;
width: 225px;
border-radius: 20px;
background: white;
padding: 10px;
p {
  margin: 0px;
}
`

export default IndividualClimb;

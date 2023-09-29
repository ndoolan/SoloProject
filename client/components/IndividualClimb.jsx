import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const IndividualClimb = ({ name }) => {
  const { totalClimbs } = useSelector((state) => state.climbsReducer);

  return (
    <>
      <p>hi</p>
      <p>{name}</p>
    </>
  );
};

export default IndividualClimb;

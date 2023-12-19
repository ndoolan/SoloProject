import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";

const IndividualClimb = ({ name, key, grade, location }) => {
  const { totalClimbs } = useSelector((state) => state.climbsReducer);

  // axios.delete method wouldn't pass name back to server
  const deleteClimb = async () => {
    const { data } = await axios.post(
      "/climbs/deleteClimb",
        { name: name },
      {withCredentials: true},
    );
  };

  // potential way to update state upon deletion
  //     dispatch(setTotalClimbs([]))
  // {withCredentials: true},

  return (
    <SingleClimbContainer key={key}>
      <p>Name: {name} </p>
      <p>Grade: {grade} </p>
      <p>Location: {location} </p>
      <DeleteButton onClick= {deleteClimb}>Delete</DeleteButton>
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
gap: 5px;
p {
  margin: 0px;
}
`

const DeleteButton = styled.button`
  background: rgb(222, 228, 237, .9);
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

export default IndividualClimb;

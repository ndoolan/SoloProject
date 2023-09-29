import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  return (
    <div>
      <LogoutButton onClick={() => navigate("/")}>Logout</LogoutButton>
    </div>
  );
};

const LogoutButton = styled.button`
  background: white;
  text-align: center;
  border-radius: 20px;
  width: 100px;
  border: 1px solid white;
  box-shadow: 5px 5px 2px grey;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 25px;
  cursor: pointer;
  &:hover {
    background: rgb(222, 228, 237);
  }
`;

export default Logout;

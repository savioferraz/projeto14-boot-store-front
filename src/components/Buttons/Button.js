import React from "react";
import styled from "styled-components";

export default function Button({
  children,
  width = "100%",
  height = "46px",
  onClick,
}) {
  return (
    <Wraped width={width} height={height} onClick={onClick}>
      {children}
    </Wraped>
  );
}

const Wraped = styled.button`
  background-color: #064420;
  color: #ffffff;
  font-size: 24px;
  box-shadow: 1px 1px 4px 1px grey;
  font-weight: 700;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  text-align: center;
  border: none;
  border-radius: 5px;
  margin: 3px;
`;

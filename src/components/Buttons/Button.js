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
  background-color: #000000;
  color: #ffffff;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  text-align: center;
  border: none;
  border-radius: 5px;
  margin: 3px;
`;

import React from "react";
import styled from "styled-components";

export default function Input({
  width = "100%",
  height = "46px",
  placeholder,
  type,
  name,
  value,
  onChange,
}) {
  return (
    <Wrapper
      height={height}
      width={width}
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    ></Wrapper>
  );
}

const Wrapper = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: #ffffff;
  height: 58px;
  border: 1px solid #064420;
  box-shadow: 1px 1px 4px 1px grey;
  border-radius: 5px;
  margin: 6px auto;
  padding: 8px;
`;

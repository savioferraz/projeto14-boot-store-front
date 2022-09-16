import React from "react";
import styled from "styled-components";

export default function ItemCard({ image, itemName, value, openModal }) {
  return (
    <Wraped onClick={openModal}>
      <img src={image} alt="img" />
      <h1>{itemName}</h1>
      <h2>R$ {value}</h2>
    </Wraped>
  );
}

const Wraped = styled.div`
  width: 164px;
  height: 164px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid;
  box-shadow: 5px 10px;
  margin: 12px;
  background-color: #ffffff;
  img {
    width: 140px;
    height: 80px;
    border: 1px solid;
    margin: 8px 12px;
    border-radius: 4px;
  }
  h1 {
    margin: 6px 12px;
  }
  h2 {
    margin: 8px 12px;
  }
`;

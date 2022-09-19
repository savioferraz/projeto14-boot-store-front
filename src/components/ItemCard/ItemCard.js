import React from "react";
import styled from "styled-components";

export default function ItemCard({ image, itemName, price, openModal }) {
  return (
    <Wraped onClick={openModal}>
      <img src={image} alt="img" />
      <h1>{itemName}</h1>
      <h2>R$ {price},00</h2>
    </Wraped>
  );
}

const Wraped = styled.div`
  width: 164px;
  height: 164px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 4px 1px grey;
  margin: 12px;
  background-color: #e4efe7;
  color: #064420;
  img {
    width: 140px;
    height: 80px;
    margin: 8px 12px;
    border-radius: 4px;
  }
  h1 {
    font-weight: 700;
    margin: 6px 12px;
  }
  h2 {
    font-size: 14px;
    margin: 8px 12px;
  }
`;

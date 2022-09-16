import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../common/UserContext.js";
import Button from "../Buttons/Button.js";
import Input from "../Inputs/Input.js";

export default function ItemModal({ image, itemName, value, cancel }) {
  const { amount, setAmount } = useContext(UserContext);

  function handleForm(e) {
    e.preventDefault();
  }

  return (
    <Wrapper>
      <ion-icon name="close-circle" onClick={cancel}></ion-icon>
      <Box>
        <img src={image} alt="img" />
        <p>
          {itemName} <span>R$ {value}</span>
        </p>
        <form onSubmit={handleForm}>
          <Input
            placeholder={"Quantidade"}
            type={"number"}
            min="1"
            name={"amount"}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Button type="submit">Adicionar ao Carrinho</Button>
        </form>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 400px;
  height: 710px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  ion-icon {
    position: fixed;
    top: 5%;
    right: 10%;
    font-size: 36px;
    color: black;
  }
`;

const Box = styled.div`
  width: 300px;
  height: 350px;
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  img {
    width: 264px;
    height: 174px;
    margin: 12px auto;
    border: 1px solid;
  }
  p {
    color: #000000;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 12px;
  }
  div {
    display: flex;
    flex-direction: row;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    margin: 0;
    opacity: 1;
  }
`;

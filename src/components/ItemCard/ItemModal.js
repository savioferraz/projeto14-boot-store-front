import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../common/UserContext.js";
import Button from "../Buttons/Button.js";
import Input from "../Inputs/Input.js";
import { updateChart } from "../../services/bootstore.js";

export default function ItemModal({ image, itemName, price, desc, cancel, product_id }) {
  const { amount, setAmount } = useContext(UserContext);

  function handleForm(e) {
    e.preventDefault();
    
    updateChart(product_id, amount).then((response) => {
      console.log(response)      
    })
    .catch((err) => {
      console.log(err);
      alert("Não foi possível adicionar o item ao carrinho.");
    });
  }
  return (
    <Wrapper>
      <ion-icon name="close-circle" onClick={cancel}></ion-icon>
      <Box>
        <img src={image} alt="img" />
        <h1>
          {itemName} <span>R$ {price}</span>
        </h1>
        <p>{desc}</p>
        <form onSubmit={handleForm}>
          <Input
            width="50px"
            height="46px"
            placeholder={"Quantidade"}
            type={"number"}
            min="1"
            name={"amount"}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Button width="200px" type="submit">
            Adicionar
          </Button>
        </form>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.35);
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
    color: #064420;
  }
`;

const Box = styled.div`
  width: 300px;
  height: 380px;
  background: #fdfaf6;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  img {
    width: 264px;
    height: 174px;
    margin: 12px auto;
  }
  h1 {
    color: #064420;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 12px;
  }
  p {
    color: #064420;
    font-size: 16px;
    margin: 4px 12px;
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

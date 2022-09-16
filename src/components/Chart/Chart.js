import React, { useContext, useState } from "react";
//import Input from "../Inputs/Input.js";
//import Button from "../Buttons/Button.js";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../common/UserContext.js";
import styled from "styled-components";

export default function Chart() {
  return (
    <>
      <HeaderWrapper>
        <>Cabeçalho</>
      </HeaderWrapper>

      <ContentWrapper>
        <p>Meu Carrinho</p>

        <ProductWrapper>
          <img src="https://apoioentrega.vteximg.com.br/arquivos/ids/452238/88434.jpg?v=637105354224830000" />
          <span>
            <h3>Coca-Cola</h3>
            <h3>R$ 10,00</h3>
          </span>
          <input type={number} name="Quantidade" min="1">qtd</input>
          <ion-icon name="trash-outline"></ion-icon>

        </ProductWrapper>
      </ContentWrapper>

      <FooterWrapper>
        <>Rodapé</>
      </FooterWrapper>
    </>
  );
}

const ContentWrapper = styled.div`
  width: 400px;
  height: 500px;
  background-color: green;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  p{
    font-family: "Roboto";
    font-weight :500 ;
    font-size: 20px;
    margin: 0 auto;
 
  }
`;

const ProductWrapper = styled.div`
    display: flex;
    margin: 20px 10px 0 10px;
    align-items: center;
    justify-content: space-around;
  div {
    margin-left: 10px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    width: 50%;
    height: 100%;
    background-color: azure;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  p {
    font-size: large;
    background-color: aqua;
    margin-left: 10px;
  }
  img {
    width: 20%;
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: pink;
`;
const FooterWrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: violet;
`;

import React from "react";
import {useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <Wraped>
      <div>
        <h1>Cesta de Compras</h1>
        <ion-icon name="cart-outline" onClick={() => navigate("/chart")}></ion-icon>{" "}
      </div>
    </Wraped>
  );
}

const Wraped = styled.footer`
  width: 400px;
  background-color: #064420;
  color: #ffffff;
  height: 50px;
  position: fixed;
  bottom: 0;
  z-index: 1;
  h1 {
    font-size: 24px;
    font-weight: 700;
    margin: 12px 4px;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin: 0 15px 0 15px;
  }
  ion-icon {
    font-size: 32px;
  }
`;

import React from "react";
import styled from "styled-components";

export default function Footer({ openChart }) {
  return (
    <Wraped>
      <div>
        <h1>footer</h1>
        <ion-icon name="cart-outline" onClick={openChart}></ion-icon>{" "}
      </div>
    </Wraped>
  );
}

const Wraped = styled.footer`
  width: 400px;
  background-color: #000000;
  color: #ffffff;
  position: fixed;
  bottom: 0;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  ion-icon {
    font-size: 32px;
  }
`;

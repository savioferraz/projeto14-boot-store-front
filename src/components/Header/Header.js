import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Wraped>
      <div>
        <h1>header</h1>
        <ion-icon name="person-circle"></ion-icon>{" "}
      </div>
    </Wraped>
  );
}

const Wraped = styled.header`
  width: 400px;
  background-color: #000000;
  color: #ffffff;
  position: fixed;
  top: 0;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  ion-icon {
    font-size: 32px;
  }
`;

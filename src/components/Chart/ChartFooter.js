import React from "react";
import styled from "styled-components";

export default function ChartFooter({total}) {
  
  
    return (
    <Wrapper>
      <div>
        <h1>Valor total da compra: R$ {(Math.round(total) / 100).toFixed(2).replace(".",",")} </h1>     
      </div>
    </Wrapper>

  );
}

const Wrapper = styled.footer`
  width: 400px;
  height: 32px;
  background-color: #000000;
  color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
 `;

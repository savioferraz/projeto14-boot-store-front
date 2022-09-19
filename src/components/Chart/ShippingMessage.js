import React, { useEffect, useState } from "react";
import { getUserAddress } from "../../services/bootstore";
import styled from "styled-components";

export default function ShippingMessage() {
  const [userAddress, setUserAddress] = useState("");

  useEffect(() => {
    getAddress();
  }, []);

  function getAddress() {
    getUserAddress()
      .then((response) => {
        setUserAddress(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return ( <TextWrapper> Frete gráitis para o seu endereço</TextWrapper>
    //   Frete para <span> {userAddress} </span>- Grátis!
     
  );
}

const TextWrapper = styled.div`
  font-size: 25px;
  color: black;
  text-align: center;
  margin: 0 auto;
  position: fixed;
  bottom: 120px;
  left: 0;
  margin: auto 05%;

  span {
    font-style: italic;
    color: darkblue;
  }
`;

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
  return <TextWrapper>Frete para <span> {userAddress} </span>- Grátis!</TextWrapper>;
}

const TextWrapper = styled.div`
  font-size: 25px;
  background-color: beige;
  color: black;
  text-align: center;
  margin: 0 auto;
  position: fixed;
  bottom: 50px;
  left: 0;
  margin: auto 10%; 
  border: 2px solid darkgray;
  padding: 10px;
  border-radius: 5px;
  span {
    font-style: italic;
    color: darkblue;

  }

`;

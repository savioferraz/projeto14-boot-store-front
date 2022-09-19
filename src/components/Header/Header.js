import React, { useEffect, useState } from "react";
import { getUserName } from "../../services/bootstore";
import styled from "styled-components";

export default function Header() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    getName();
  }, []);

  function getName() {
    getUserName()
      .then((response) => {
        setUserName(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <Wraped>
      <div>
        <h1>Olá, {userName} </h1>
        <ion-icon name="person-circle"></ion-icon>{" "}
      </div>
    </Wraped>
  );
}

const Wraped = styled.header`
  width: 400px;
  background-color: #064420;
  color: #ffffff;
  height: 50px;
  position: fixed;
  top: 0;
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

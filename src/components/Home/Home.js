import React, { useState } from "react";
import styled from "styled-components";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import ItemCard from "../ItemCard/ItemCard.js";
import ItemModal from "../ItemCard/ItemModal.js";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Wraped>
        {modal ? <ItemModal cancel={() => setModal(false)}></ItemModal> : <></>}
        <ItemCard openModal={() => setModal(true)} />
        <ItemCard openModal={() => setModal(true)} />
        <ItemCard openModal={() => setModal(true)} />
        <ItemCard openModal={() => setModal(true)} />
        <ItemCard openModal={() => setModal(true)} />
        <ItemCard openModal={() => setModal(true)} />
        <ItemCard openModal={() => setModal(true)} />
        <ItemCard openModal={() => setModal(true)} />
        <ItemCard openModal={() => setModal(true)} />
        <ItemCard openModal={() => setModal(true)} />
        <ItemCard openModal={() => setModal(true)} />
        <ItemCard openModal={() => setModal(true)} />
      </Wraped>
      <Footer openChart={() => navigate("/chart")}/>
    </>
  );
}

const Wraped = styled.div`
  background-color: lightgray;
  width: 100%;
  height: 646px;
  margin: 32px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

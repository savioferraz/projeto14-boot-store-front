import React, { useContext, useEffect, useState } from "react";
//import Input from "../Inputs/Input.js";
//import Button from "../Buttons/Button.js";
//import { Link, useNavigate } from "react-router-dom";
//import UserContext from "../../common/UserContext.js";
import Header from "../Header/Header.js";
import ChartFooter from "../Chart/ChartFooter";
import { getListChartItems } from "../../services/bootstore";
import ShippingMessage from "../Chart/ShippingMessage";
import styled from "styled-components";

export default function Chart() {
  const [chartItems, setChartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getChartItems();
  }, []);

  function getChartItems() {
    getListChartItems()
      .then((response) => {
        setChartItems(response.data.chartItems);
        setTotal(response.data.chartTotalPrice);
      })
      .catch((err) => {
        console.log(err);
        alert("Erro ao carregar carrinho");
      });
  }
  return (
    <>
      <Header />
      <ContentWrapper>
        <p>Meu Carrinho</p>
        {chartItems.length === 0 ? (
          <TextWrapper>
            <p>
              Você não tem nenhum nenhum item no carrinho. Adicione itens para
              realizar a compra!
            </p>
          </TextWrapper>
        ) : (
          chartItems.map((value) => (
            <ProductWrapper>
              <img src={value.img} />
              <span>
                <p>{value.product}</p>
                <h3>R$ {(Math.round(value.price) / 100).toFixed(2).replace(".",",")}</h3>
              </span>
              Qtd: {value.amount} <ion-icon name="trash-outline"></ion-icon>
            </ProductWrapper>
          ))
        )}
        <ShippingMessage />
      </ContentWrapper>
      <ChartFooter total={total} />
    </>
  );
}

const ContentWrapper = styled.div`
  width: 400px;
  height: 646px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  position: relative;
  top: 30px;

  p {
    font-family: "Roboto";
    font-weight: 600;
    font-size: 25px;
    margin: 3% auto;
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  margin: 20px 10px 0 10px;
  align-items: center;
  justify-content: space-around;
  font-size: 17px;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 5px;

  div {
    margin-left: 10px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  p {
    font-family: "Arial";
    font-size: 22px;
    margin-left: 10px;
  }
  img {
    width: 70px;
    height: 75px;
    border: 1px solid darkgray;
    border-radius: 5px;
  }
  input {
    width: 20px;
  }
  h3{
    font-size: 20px;
    margin-left: 10px;
  }
  ion-icon{
    color: red;
  }
`;

const TextWrapper = styled.div`
  p {
    font-family: "Roboto";
    color: black;
  }
`;

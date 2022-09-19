import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header.js";
import ChartFooter from "../Chart/ChartFooter";
import { getListChartItems, deleteItem } from "../../services/bootstore";
import ShippingMessage from "../Chart/ShippingMessage";
import ChartModal from "./ChartModal.js";
import styled from "styled-components";

export default function Chart() {
  const [chartItems, setChartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

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

  function deleteChartItem(id) {
    const confirmDelete = window.confirm(
      "Tem certeza de que gostaria de excluir esse item do seu carrinho?"
    );
    if (confirmDelete) {
      deleteItem(id)
        .then(() => {
          getChartItems();
        })
        .catch((err) => {
          alert("Erro ao deletar item do carrinho.");
          console.log(err);
        });
    }
  }

  return (
    <>
      {isOpen ? (
        <ChartModal
          onClick={() => setIsOpen(false)}
          total={(Math.round(total) / 100).toFixed(2).replace(".", ",")}
        />
      ) : (
        <></>
      )}
      <Header />
      <TitleWrapper> Meu Carrinho</TitleWrapper>

      <ContentWrapper>
        {chartItems.length === 0 ? (
          <TextWrapper>
            <p>
              Você não tem nenhum item no carrinho. Adicione itens para realizar
              a compra!
            </p>
            <HomeButtonWrapper>
              <button onClick={() => navigate("/home")}>
                Voltar para tela de compras
              </button>
            </HomeButtonWrapper>
          </TextWrapper>
        ) : (
          <>
            {chartItems.map((value) => (
              <>
                <ProductWrapper key={value.id}>
                  <img src={value.img} />
                  <span>
                    <p>{value.product}</p>
                    <h3>
                      R${" "}
                      {(Math.round(value.price) / 100)
                        .toFixed(2)
                        .replace(".", ",")}
                    </h3>
                  </span>
                  Qtd: <h4>{value.amount}</h4>
                  <ion-icon
                    name="trash-outline"
                    onClick={() => deleteChartItem(value.id)}
                  ></ion-icon>
                </ProductWrapper>
              </>
            ))}
          </>
        )}
      </ContentWrapper>
      {chartItems.length === 0 ? (
        <></>
      ) : (
        <>
          <FinalizePurchaseButton>
            <button onClick={() => setIsOpen(true)}>Finalizar Compra</button>
          </FinalizePurchaseButton>
          <ShippingMessage />
        </>
      )}
      <ChartFooter total={total} />
    </>
  );
}
const TitleWrapper = styled.div`
  z-index: 1;
  position: relative;
  top: 40px;
  left: 0;
  text-align: center;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 30px;
  margin: 3% auto;
`;
const ContentWrapper = styled.div`
  width: 400px;
  height: 480px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  position: relative;
  top: 30px;
`;

const ProductWrapper = styled.div`
  display: flex;
  margin: 20px 10px 0 10px;
  align-items: center;
  justify-content: space-around;
<<<<<<< HEAD
=======
  font-size: 17px;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 5px;
  background-color: #fafafa;
  h4 {
    font-size: 17px;
    padding: 1px 4px;
    border: 1px solid gray;
    border-radius: 2px;
  }

>>>>>>> 7590484716ffe6a42a2e2de53d4ea5fe14a0e905
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
  h3 {
    font-size: 20px;
    margin-left: 10px;
  }

  ion-icon {
    color: red;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  p {
    font-family: "Roboto";
    font-weight: 300;
    color: black;
    font-size: 30px;
  }
`;

const HomeButtonWrapper = styled.div`
  button {
    margin-top: 10px;
    padding: 10px;
    width: 250px;
    color: grey;
    font-size: 20px;
    background-color: #fafafa;
    font-family: "Roboto";
    border: 1px dotted darkgrey;
    border-radius: 50px;
  }
`;

const FinalizePurchaseButton = styled.div`
  width: 100%;
  width: 400px;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 40px;
  left: 0;

  button {
    font-size: 15px;
    font-family: "Roboto";
    font-weight: 700;
    text-align: center;
    margin: 0 auto;

    margin: auto 0;
    border: 2px solid gray;
    padding: 10px;
    border-radius: 20px;
  }
`;

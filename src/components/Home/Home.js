import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import ItemCard from "../ItemCard/ItemCard.js";
import ItemModal from "../ItemCard/ItemModal.js";

export default function Home() {
  const [modal, setModal] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((answer) => {
        setProducts(answer.data);
      })
      .catch((error) => alert(`Opa, algo deu errado... ${error.message}`));
    console.log(products);
  }, []);

  return (
    <>
      <Header />
      <Wraped>
        {modal ? <ItemModal cancel={() => setModal(false)}></ItemModal> : <></>}
        {products.map((product) => (
          <ItemCard
            openModal={() => setModal(true)}
            itemName={product.product}
            image={product.img}
            value={product.price}
          />
        ))}
      </Wraped>
      <Footer openChart={() => navigate("/chart")} />
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

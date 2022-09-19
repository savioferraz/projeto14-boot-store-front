import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import ItemCard from "../ItemCard/ItemCard.js";
import ItemModal from "../ItemCard/ItemModal.js";
import { getProducts } from "../../services/bootstore.js";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [modalData, setModalData] = useState([]);

  useEffect(() => {
    getProducts()
      .then((answer) => {
        setProducts(answer.data);
      })
      .catch((error) => alert(`Opa, algo deu errado... ${error.message}`));
  }, []);

  const selectProduct = ({ product }) => {
    setModalData(product);
    setModal(true);
    console.log(modalData);
  };

  return (
    <>
      <Header />
      <Wraped>
        {modal ? (
          <ItemModal
            image={modalData.img}
            itemName={modalData.product}
            price={`${modalData.price / 100},00`}
            desc={modalData.desc}
            cancel={() => setModal(false)}
            product_id={modalData._id}
          ></ItemModal>
        ) : (
          <></>
        )}
        {products.map((product) => (
          <ItemCard
            key={product.index}
            openModal={() => selectProduct({ product })}
            itemName={product.product}
            image={product.img}
            price={product.price / 100}
          />
        ))}
      </Wraped>
      <Footer />
    </>
  );
}

const Wraped = styled.div`
  background-color: #fdfaf6;
  width: 100%;
  height: 646px;
  margin: 50px auto;
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

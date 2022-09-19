import styled from "styled-components";
import { logout } from "../../services/bootstore.js" 
import { useNavigate } from "react-router-dom";

export default function ChartModal({ total, onClick }) {
    const navigate = useNavigate();
    
    function confirmPurchase(){
        alert(`Obrigado por realizar a compra! \n Sua sessão será finalizada!` );
        logout()
        .then((response) => {
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          alert("Erro ao deslogar");
        });
        
        return 
    }
  return (
    <ModalWrapper>
      <TextWrapper>
        <div>
          <ion-icon name="close-circle" onClick={onClick}></ion-icon>
          <h1>
            Compra no valor total de: <p>R${total}</p>
          </h1>
        </div>
        <ButtonWrapper>
          <button onClick={() => confirmPurchase()}>Confirmar</button>
        </ButtonWrapper>
      </TextWrapper>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.body`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;

  div {
    width: 75%;
    height: 40%;
    border-radius: 40px;
    border: 2px solid lightgray;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fdfaf6;
  }

 
`;

const TextWrapper = styled.div`
    div {
    width: 100%;
    height: 50%;
    border: none;

  }
  ion-icon {
    color: #064420;
    font-size: 35px;
    position: relative;
    bottom: 15px;
    left: 120px;
    
  }
  h1 {
    font-family: "Roboto";
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    position: relative;
    bottom: 0;
    color: #064420;
  }
  p {
    padding-top: 10px;
    color: #064420;
    font-size: 25px;
    font-weight: 700;
  }
`;
const ButtonWrapper = styled.div`
 button{
    background-color: #064420;
    font-family: "Roboto";
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 40px;
    border: 1px solid gray;
    color :white;
    
 }
`;

import React, { useContext, useState } from "react";
import Input from "../Inputs/Input.js";
import Button from "../Buttons/Button.js";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../common/UserContext.js";
import { postLogin } from "../../services/bootstore.js";
import styled from "styled-components";

export default function Login() {
  const navigate = useNavigate();
  const { email, setEmail } = useContext(UserContext);
  const [password, setPassword] = useState("");
  const body = { email, password };

  function handleForm(e) {
    e.preventDefault();
    postLogin(body)
      .then((ans) => {
        const token = ans.data;
        const authJSON = JSON.stringify({ token });
        localStorage.setItem("bootstore", authJSON);
        navigate("/home");
      })
      .catch((error) => alert(`Opa, algo deu errado... ${error.message}`));
  }

  return (
    <Wraped>
      <h1>Driven Eats +</h1>
      <form onSubmit={handleForm}>
        <Input
          placeholder={"E-mail"}
          type={"email"}
          name={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder={"Senha"}
          type={"password"}
          name={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Entrar</Button>
      </form>
      <Link to="/sign-up">Criar uma conta</Link>
    </Wraped>
  );
}

const Wraped = styled.div`
  background-color: #fdfaf6;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  position: fixed;
  top: 0;
  left: 0;
  
  a{
    margin-top: 15px;
    color: #064420;
    text-decoration: none;
    
  }
  h1 {
    color: #064420;
    font-weight: 700;
    font-size: 21px;
    line-height: 21px;
    margin: 12px;
  }
`;

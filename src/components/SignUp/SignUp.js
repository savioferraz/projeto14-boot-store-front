import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Buttons/Button.js";
import Input from "../Inputs/Input.js";

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const body = { name, email, password, passwordConfirm };

  function handleForm(e) {
    e.preventDefault();
    // postSignUp(body)
    //   .then((ans) => {
    //     const token = ans.data;
    //     const authJSON = JSON.stringify({ token });
    //     localStorage.setItem("bootstore", authJSON);
    //     navigate("/home");
    //   })
    //   .catch((error) => alert(`Opa, algo deu errado... ${error.message}`));
  }

  return (
    <>
      <h1>Boot Store</h1>
      <form onSubmit={handleForm}>
        <Input
          placeholder={"Nome"}
          type={"text"}
          name={"name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <Input
          placeholder={"Confirme a senha"}
          type={"password"}
          name={"passwordConfirm"}
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <Button type="submit">Cadastrar</Button>
      </form>
      <Link to="/">Já tem uma conta? Faça o Login</Link>
    </>
  );
}

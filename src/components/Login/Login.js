import React, { useContext, useState } from "react";
import Input from "../Inputs/Input.js";
import Button from "../Buttons/Button.js";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../common/UserContext.js";

export default function Login() {
  const navigate = useNavigate();
  const { email, setEmail } = useContext(UserContext);
  const [password, setPassword] = useState("");
  const body = { email, password };

  function handleForm(e) {
    e.preventDefault();
    // postLogin(body)
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
    </>
  );
}

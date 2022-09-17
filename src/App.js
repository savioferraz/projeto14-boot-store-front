import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles.js";
import Home from "./components/Home/Home.js";
import Login from "./components/Login/Login.js";
import SignUp from "./components/SignUp/SignUp.js";
import Chart from "./components/Chart/Chart.js";
import PrivatePage from "./common/PrivatePage.js";
import { UserProvider } from "./common/UserContext.js";

export default function App() {
  return (
    <UserProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivatePage><Login /></PrivatePage>}/>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/home" element={<PrivatePage><Home /></PrivatePage>}/>
          <Route path="/chart" element={<Chart />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

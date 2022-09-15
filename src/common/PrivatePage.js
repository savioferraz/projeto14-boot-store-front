import React from "react";
import { Navigate } from "react-router-dom";

const auth = JSON.parse(localStorage.getItem("bootstore"));

export default function PrivatePage({ children }) {
  return auth?.token ? <Navigate to="/home" /> : children;
}

import axios from "axios";

const BASE_URL = "http://localhost:5000";

function createHeaders() {
  const auth = JSON.parse(localStorage.getItem("bootstore"));
  const config = {
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  };

  return config;
}

function getProducts() {
  return axios.get(`${BASE_URL}/products`);
}

export { createHeaders, getProducts };

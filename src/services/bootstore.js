import axios from "axios";

const BASE_URL = "//localhost:5000";

function postSignUp(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);
  return promise;
}

function postLogin(body) {
  const promise = axios.post(`${BASE_URL}/login`, body);
  return promise;
}

function getListChartItems() {
  const config = createHeaders();
  const promise = axios.get(`${BASE_URL}/chart`, config);
  return promise;
}

function getUserName() {
  const config = createHeaders();
  const promise = axios.get(`${BASE_URL}/name`, config);
  return promise;
}

function getProducts() {
  const config = createHeaders();
  const promise = axios.get(`${BASE_URL}/products`, config);
  return promise;
}

function getUserAddress() {
  const config = createHeaders();
  const promise = axios.get(`${BASE_URL}/address`, config);
  return promise;
}

function deleteItem(id) {
  const config = createHeaders();
  const promise = axios.delete(`${BASE_URL}/deleteItem/${id}`, config);
  return promise;
}

function logout() {
  //const config = createHeaders();
  const promise = axios.delete(`${BASE_URL}/logout`);
  return promise;
}

function createHeaders() {
  const auth = JSON.parse(localStorage.getItem("bootstore"));
  const config = {
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  };

  return config;
}

export {
  createHeaders,
  getListChartItems,
  getUserName,
  getUserAddress,
  deleteItem,
  logout,
  getProducts,
  postSignUp,
  postLogin,
};

import axios from "axios";

const BASE_URL = "//localhost:5000";

function getListChartItems (){
    //const config = createHeaders();
    const promise = axios.get(`${BASE_URL}/chart`); //colocar config
    return promise;
}

function getUserName (){
    const promise = axios.get(`${BASE_URL}/name`);
    return promise;
}

function getUserAddress(){
    const promise = axios.get(`${BASE_URL}/address`);
    return promise;

}

function deleteItem(id) {
    //const config = createHeaders();
    const promise = axios.delete(`${BASE_URL}/deleteItem/${id}`);
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
    createHeaders,getListChartItems,getUserName ,getUserAddress,deleteItem 
  };
  
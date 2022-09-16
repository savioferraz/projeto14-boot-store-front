import axios from "axios";

const BASE_URL = "https://localhost/5000";



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
  };
  
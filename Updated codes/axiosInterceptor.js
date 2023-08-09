import axios from 'axios';

const axiosInterceptorInstance = axios.create({
  baseURL: 'http://localhost:8080', 
});


axiosInterceptorInstance.interceptors.request.use(
  (config) => {
    const accessToken = JSON.parse(localStorage.getItem("token"));

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInterceptorInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.data && error.response.data.message) {
      alert(error.response.data.message);
    } else {
      alert("An error occurred. Please try again.");
    }
    return Promise.reject(error);
  }
);

export default axiosInterceptorInstance;

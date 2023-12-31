import axios from "axios";
import useGetToken from "../Hooks/useGetToken";
const token = useGetToken();
export const axiosInstance = axios.create({
  baseURL: "https://zeljko001.pythonanywhere.com",
  Authorization: `Bearer ${token ? token : ""}`,

  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (request) => {
    // console.log('Starting Request', JSON.stringify(request, null, 2));
    return request;
  },
  (error) => {
    console.error("Request Error:", error);

    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // console.log('Response:', JSON.stringify(response, null, 2));
    return response;
  },
  (error) => {
    console.error("Response Error:", error);
    return Promise.reject(error);
  }
);

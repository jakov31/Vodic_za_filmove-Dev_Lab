import { axiosInstance } from "../services/api";
import useGetToken from "../Hooks/useGetToken";

export const getAllMovies = async () => await axiosInstance.get("/movies");

export const logIn = async (loginData) => {
  return await axiosInstance.post("/login/", loginData);
};

export const registration = async (registrationData) => {
  return await axiosInstance.post("/registration/", registrationData);
};

// let res = await logIn();
// res.data;

export const getCategories = async () => {
  return await axiosInstance.get("/categories/");
};

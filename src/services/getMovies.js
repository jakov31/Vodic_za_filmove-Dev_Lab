import { axiosInstance } from "../services/api"

class GetMovies {
    getAllMovies = async () => await axiosInstance.get("/character")
}

export const getMovies= new GetMovies()
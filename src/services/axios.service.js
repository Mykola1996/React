import axios from "axios";
import baseUrl from "../сonfigs/urls";

export const axiosService = axios.create({
    baseURL:baseUrl
});
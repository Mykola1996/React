import {axiosService} from "./axios.service";
import {urls} from "../сonfigs/urls";

export const userService = {
    getAll:()=>axiosService.get(urls.users).then(value => value.data)
}
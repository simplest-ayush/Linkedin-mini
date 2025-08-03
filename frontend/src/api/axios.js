import axios from "axios";
const instance = axios.create({
    baseURL: "https://linkedin-mini-sqz1.onrender.com/api/v1",
    withCredentials: true
});
export default instance;

import axios from "axios";

const Axios = axios.create({
  baseURL: "https://movies-api14.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "4ff81a2a02mshd3440399618a344p1c42e9jsnf3317e96b785",
    "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
  },
});

export default Axios;

import axios from 'axios'
// Promise based library. Good to make requests to server across the internet.
// Step 1: initialize

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})

export default instance;

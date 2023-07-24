// FETCH
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// AXIOS
const axios = require("axios");
axios.get("https://api.example.com/data")
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error));
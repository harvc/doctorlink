
const axios = require('axios');

function getapi() {
axios
    .get("http://localhost:3000/users/1")
    .then(response => {
      console.log("response: ", response.data);
      console.log("data:", response.data);
      // do something about response
    })
    .catch(err => {
      console.error(err)
    });
}

getapi();
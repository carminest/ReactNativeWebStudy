const axios = require('axios');

// const instance = axios.create({
//   baseUrl: 'https://api.igdb.com/v4/',
//   header: {'Client-ID': 'mlczp17f4a0i40k6uo8joqkwwhnnm6', 'Authorization': 'Bearer v4qa6h6sjh9dar1h5ouwgc4aeu3ncz'},
//   timeout: 1000,
// });

const CLIENT_ID = 'mlczp17f4a0i40k6uo8joqkwwhnnm6';
const CLIENT_SECRET = 'ymdxmacn2b2cmgf0t4cexgp46nxt5h';
const CLIENT_CREDENTIALS = 'client_credentials';

const getApi = () =>
  axios({
    method: 'post',
    url: 'v4/games',
    headers: {'Client-ID': 'mlczp17f4a0i40k6uo8joqkwwhnnm6', Authorization: 'Bearer v4qa6h6sjh9dar1h5ouwgc4aeu3ncz'},
  })
    .then(response => {
      console.log(response);
    })
    .catch(response => {
      console.log(response);
    });

export default getApi;

import axios from "axios";
const API_KEY = import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY;

const options = {
  method: 'GET',
  url: 'https://shazam-core.p.rapidapi.com/v1/charts/world',
  params: {country_code: 'DZ'},
  headers: {
    'x-rapidapi-key': {API_KEY},
    'x-rapidapi-host': 'shazam-core.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
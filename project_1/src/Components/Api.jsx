import axios from "axios"
    const axios = require("axios");
    
    const options = {
      method: 'GET',
      url: 'https://hotels4.p.rapidapi.com/locations/v2/search',
      params: {query: 'new york', locale: 'en_US', currency: 'USD'},
      headers: {
        'X-RapidAPI-Key': '8f14c6e702msh879c60653bea985p12c54djsnfa31ebe4f211',
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
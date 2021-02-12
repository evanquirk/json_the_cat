//breedFetcher.js
//@evanquirk

const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, resp, body) => {
    if (error) {
      callback(`Error Message: ${error}`,null);
    }

    const data = JSON.parse(body);
    // console.log(data);

    const breed = data[0];
    if (breed) {
      callback(null,breed.description);
    } else {
      callback(`The breed requested: "${breedName}" cannot be found.`,null);
    }
  });

};

module.exports = { fetchBreedDescription }
const fs = require('fs');

const website = process.argv.slice(2);

const websiteSearch = `https://api.thecatapi.com/v1/breeds/search?q=${website[0]}`;




const request = require('request');
request(websiteSearch, (error, response, body) => {
  
  if (error) {
    console.log("Your request has returned in error");
  }
  const data = JSON.parse(body);
  
  if (typeof data[0] === "undefined") {
    console.log("That breed doesn't exsist");
  } else
    console.log(data[0].description);
});


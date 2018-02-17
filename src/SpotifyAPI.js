
var request = require('request'); // "Request" library
var querystring = require('querystring');


var client_id = 'da9c54b5c5d14e0fa4cfb48594d05c11'; // Your client id
var client_secret = '17573b06373e4dc49adab798bf92957f'; // Your secret

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token;
    var options = {
      url: 'https://developer.spotify.com',
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Authorization': 'Bearer ' + token
      },
      json: true
    };



  const url = 'https://api.spotify.com/v1/search?'+
querystring.stringify({
    q: 'Muse',
    type: "album,artist,track,playlist",
    market: "US",
  })

       const headerstoken = {
              'Accept': 'application/json',
              'Authorization':"Bearer "+token
            }
  fetchdata={
    method:'GET',
    headers:headerstoken
    
  }
    fetch(url,fetchdata)
    .then((resp) => resp.json())
    .then(function(data) {
      let authors = data;
      console.log(data)
  
     
    })
    .catch(function(error) {
      console.log(error);
    });
    
    console.log(options)
    request.get(options, function(error, response, body) {
      console.log(body);
    });
  }
});
/*

const url = 'https://api.spotify.com/v1/search?q=Muse&type=album,artist,track,playlist&market=US';
const token = "BQD6tzRGwk0L_rn4Aep-5OAHEI177rRmhGCrQNE9BvWxwFo6Li4QB4A1goKgclVelmEivTodqJzK-A9Q3Oc3Ieh76nDshqK6nfsM4WPZE2wF0uhMmUV_JTP4qRmtgyqHmWNL-cRDKUYe"
const headerstoken = {
       'Accept': 'application/json',
       'Authorization':"Bearer "+token
     }
fetchdata={
method:'GET',
headers:headerstoken

}
fetch(url,fetchdata)
.then((resp) => resp.json())
.then(function(data) {
let authors = data;
console.log(data)


})
.catch(function(error) {
console.log(error);
});


*/
var request = require('request'); // "Request" library
var querystring = require('querystring');


var client_id = 'da9c54b5c5d14e0fa4cfb48594d05c11'; // Your client id
var client_secret = '17573b06373e4dc49adab798bf92957f'; // Your secret

// your application requests authorization
var authOptions = {
    url: 'https://cs-554-spotify-proxy.herokuapp.com/api/token',
    headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
        grant_type: 'client_credentials'
    },
    json: true
};


var token
request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {

        // use the access token to access the Spotify Web API
        token = body.access_token;}})
export const search = (query)=>{



        const url = 'https://api.spotify.com/v1/search?' +
            querystring.stringify({
                q: query,
                type: "album,artist,track,playlist",
                market: "US",
            })

        const headerstoken = {
            'Accept': 'application/json',
            'Authorization': "Bearer " + token
        }
        var fetchdata = {
            method: 'GET',
            headers: headerstoken

        }

        return fetch(url, fetchdata)
            .then((resp) => resp.json())
            .then(function (data) {
                
                console.log(data)
                return data


            })
            .catch(function (error) {
                console.log(error);
            });
 

        }

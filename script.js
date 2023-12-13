var client_id = '6e45be20d64d40be8c2c5b51da9dec00';
var redirect_uri = 'http://localhost:8888/callback';
var uri = 'https://accounts.spotify.com/authorize?' +
querystring.stringify({
  response_type: 'code',
  client_id: client_id,
  scope: scope,
  redirect_uri: redirect_uri,
  state: state
});

fetch(uri).then(function (response){

  console.log('Successful', response);

}).catch(function (err){

  console.warn("Error", err)

})
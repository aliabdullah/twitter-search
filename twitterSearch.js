var twit = require('twitter');

var twitter = new twit({
	consumer_key: 'KoLuGGF0RZEsfNXSOIfoKxklm',
	consumer_secret: 'MdTU43iEQJBI5TycHKyrSbL3w5bjEMLLpMGt4M5svzLfvIkZZY',
	access_token_key: '1014171823-oKwimfagcffbNS0Lvhm632UMl0Ea3m7kmXXJWGf',
	access_token_secret: 'PWZP6tWT6CBPnQmz1tsz9mchInJn2Ew3CXnPSOFqll6rt'
});

var util = require("util");

/*
twitter.search('nodejs OR #node', function(data) {
	//var tweet = JSON.parse(data);
    console.log(util.inspect(data));
});
*/

function searchTwitterStream(keyword) {
	var body = '';
	var tweets = [];
	twitter.stream('filter', {track: keyword}, function(stream) {
		//console.log(stream);
		stream.on("data", function(data) {
			//var json = JSON.parse(data.toString().slice(0, -4));
			console.log("Tweet: " + data["text"]);
			//tweets.push(data);
			/*if(data) {
				//var json = JSON.parse(data);
				console.log("" + data);
			}*/	
		});
		/*
		setTimeout(function() {
			//console.log("\nCollected " + tweets.length + " Tweets.\n");
			stream.destroy();
			process.exit(0);
		}, 15000);
		*/	
	});
};

var argumentLength = process.argv.length;
if(argumentLength < 3 || process.argv.slice(2).toString()[0] != '-') {
	console.log("node twitterSearch -keyword");
	console.log("ex: node twitterSearch -bintricks");
	process.exit(0);
} else {
	var keyword = process.argv.slice(2).toString().substring(1);
	if(keyword.length > 0) {
		searchTwitterStream(keyword);
	}
}

searchTwitterStream('bieber');
/*describe('OAuth1.0',function(){
  var OAuth = require('oauth');

  it('tests trends Twitter API v1.1',function(done){
    var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'KoLuGGF0RZEsfNXSOIfoKxklm',
      'MdTU43iEQJBI5TycHKyrSbL3w5bjEMLLpMGt4M5svzLfvIkZZY',
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(
      'https://api.twitter.com/1.1/trends/place.json?id=23424977',
      '1014171823-oKwimfagcffbNS0Lvhm632UMl0Ea3m7kmXXJWGf', //test user token
      'PWZP6tWT6CBPnQmz1tsz9mchInJn2Ew3CXnPSOFqll6rt', //test user secret            
      function (e, data, res){
        if (e) console.error(e);        
        console.log(require('util').inspect(data) + "HELLO");
        done();      
      });    
  });
});*/
/*
var https = require("https");
var options = {
	host: 'stream.twitter.com',
	path: '/1.1/statuses/filter.json?track=bieber',
	method: 'GET',
	auth: "1014171823:ilademahom",
	headers: {
		"Authorization": "Basic " + new Buffer("AliAbdallahAwad:ilademahom").toString("base64")
	}
};
var request = https.request(options, function(response) {
	var body = '';
	//console.log("Logged Successfuly");
	response.on("data", function(chunk) {
		var tweet = JSON.parse(chunk);
		console.log("Tweet: " + tweet.text)
	});
	response.on("end", function() {
		console.log("Disconnected");
	});
});
request.end();
*/
/*
var util = require('util'),
    twitter = require('twitter');
var twit = new twitter({
    consumer_key: 'KoLuGGF0RZEsfNXSOIfoKxklm',
    consumer_secret: 'MdTU43iEQJBI5TycHKyrSbL3w5bjEMLLpMGt4M5svzLfvIkZZY',
    access_token_key: '1014171823-oKwimfagcffbNS0Lvhm632UMl0Ea3m7kmXXJWGf',
    access_token_secret: 'PWZP6tWT6CBPnQmz1tsz9mchInJn2Ew3CXnPSOFqll6rt'
});


app.get('/', twit.gatekeeper('/login'), routes.index);
app.get('/login', routes.login);
app.get('/twauth', twit.login());

twit.stream('user', {track:'nodejs'}, function(stream) {
    stream.on('data', function(data) {
        console.log(util.inspect(data));
        //console.log("" + data);
    });
    // Disconnect stream after five seconds
    //setTimeout(stream.destroy, 5000);
});

twit.stream('statuses/sample', function(stream) {
    stream.on('data', function(data) {
        console.log(util.inspect(data));
    });
});
*/
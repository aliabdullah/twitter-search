var Twit = require('twit')

var T = new Twit({
    consumer_key:         'KoLuGGF0RZEsfNXSOIfoKxklm'
  , consumer_secret:      'MdTU43iEQJBI5TycHKyrSbL3w5bjEMLLpMGt4M5svzLfvIkZZY'
  , access_token:         '1014171823-oKwimfagcffbNS0Lvhm632UMl0Ea3m7kmXXJWGf'
  , access_token_secret:  'PWZP6tWT6CBPnQmz1tsz9mchInJn2Ew3CXnPSOFqll6rt'
})

function searchTwitterStream(keyword) {
	var stream = T.stream('statuses/filter', { track: keyword })

	stream.on('tweet', function (tweet) {
	  console.log("Tweet: " + tweet.text)
	})
	stream.on('error', function() {
		//stream.end()
		console.log("Try to fetch streams from twitter");
		//process.exit(0);
	})
}

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
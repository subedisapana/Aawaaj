function togglesidebar(){
    document.getElementById("sidebar").classList.toggle("active");
}
 
var _ = require("lodash");
var Twitter = require("twitter");

function api(app) {
  var apiTwitter = new Twitter({
    consumer_key: "CXVNsTDohsJaIxl0cjpuLKXYr",
    consumer_secret: "Y49dNi2NPN9vJaPS95QnRLslOqisEuC7v934lHOfN05cVjbtDB",
    access_token_key: "2834545563-QYQqm8hnLPiU3eFyAD8SGtKhfIYW7gMp8fGh8Xd",
    access_token_secret: "SUquQt3XC2ve3IIa8JbwMa4bsRCpZSJuCVKYAXLUTDBBT"
  });

  var params = { q: "#NowPlaying", count: 100 };

  app.get("/api/tweets", function(request, res) {
    apiTwitter.get("/search/tweets", params, function(error, tweets, response) {
      var results = _.filter(tweets.statuses, item => {
        return _.some(item.entities.urls, url => {
          return _.includes(url.expanded_url, "you");
        });
      });
      console.log(results);
      results.length !== 0 ? res.json(results) : tweets;
    });
  });
}

module.exports = api;


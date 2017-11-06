import Tweet from '../common/Tweet.js';

export class twitterHandler {
    var hashtag="";
    constructor(Hashtag) {
        hashTag = Hashtag;
    }
    function

    generateNewTweet() {
        var tweet=new Tweet();
        var tweetLength=Math.random()*(160-100-hashtag.length)+100+hashtag.length;
        var s="";
        var hashTagAdded=false;
        while(s.length<tweetLength)
        {
            if(1==Math.random()&&!hashTagAdded)
            {
                s+=hashtag;
                hashTagAdded=true;
            }
            s+=String.fromCharCode(Math.random()*(122-97)+97);
        }
        tweet.dateTime=new Date().toLocaleDateString();
        tweet.text=s;
        return tweet;
    }

    export
    function

    registerTweetsCallback(func) {
        (function loop() {
            var rand = Math.round(Math.random() * (3000 - 500)) + 500;
            setTimeout(function () {
                //alert('A');
                func(generateNewTweet());
                loop();
            }, rand);
        }());
    }

//Send response to a tweet
    export
    function

    sendResponse(TweetId, text) {

    }

//To fetch a tweet extra: responses
    export
    function

    getTweetExtra(TweetId) {

    }

    export
    function

    reTweet(TweetId) {

    }
}


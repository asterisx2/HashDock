import Tweet from '../common/Tweet.js';

export class twitterHandler {
    constructor(Hashtag) {
        this.hashTag = Hashtag;
    }

    function

    generateNewTweet() {
        var tweet=new Tweet();
        var tweetLength=Math.random()*(160-100-this.hashtag.length)+100+this.hashtag.length;
        var s="";
        var hashTagAdded=false;
        while(s.length<tweetLength)
        {
            if(Math.random()==1&&!hashTagAdded)
            {
                s.concat(hashtag);
                hashTagAdded=true;
            }
            else
            s.concat(String.fromCharCode(Math.random()*(122-97)+97));
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


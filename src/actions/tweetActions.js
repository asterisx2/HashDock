import * as types from './actionTypes';
import twitterHandler from '../api/mock/twitterHandler';

export function newTweet(tweet) {
  return {type: types.NEW_TWEET, tweet};
}

export function registerTweetsListener(hashTag) {
  return function(dispatch) {
    return twitterHandler(hashTag).registerTweetsListener(newTweet)
  };
}
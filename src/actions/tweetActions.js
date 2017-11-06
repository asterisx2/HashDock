import * as types from './actionTypes';

export function newTweet(tweet) {
  return {type: types.NEW_TWEET, tweet};
}
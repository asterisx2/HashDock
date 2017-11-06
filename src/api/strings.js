//This stores the location of api, i.e the "import" location
//Mock is for testing, real is for the actual api.


var activeApiDirectory="mock";

export const apiLocTweet="./"+activeApiDirectory+"/twitter";
export const apiAccountTweet="./"+activeApiDirectory+"/account";
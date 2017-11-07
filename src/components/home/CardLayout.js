import React,{PropTypes} from 'react';
import Card from './Card';
import * as TweetActions from '../../actions/tweetActions';
import TweetDetails from './TweetDetail';



export class CardLayout extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            tweets: Object.assign({}, props.tweets),
            showFullTweet:false,
            detailedTweet:null
        };

        this.showTweetDetails = this.showTweetDetails.bind(this);
        this.toggleShowTweetDetails = this.toggleShowTweetDetails.bind(this);
    }
    showTweetDetails(tweet){
        this.state({detailedTweet:tweet});
        this.toggleShowTweetDetails();
    }
    toggleShowTweetDetails()
    {
        this.setState({showFullTweet:!showFullTweet});
    }
    render() {
        return (
            <div>
                {this.state.showFullTweet?<TweetDetails tweet={detailedTweet}/>:null}
                {tweets.map(tweet =>
                    <Card key={tweet.id} tweet={tweet} onClick={this.showTweetDetails}/>
                )}
            </div>
        );


    }
}
CardLayout.propTypes = {
    tweets: PropTypes.array.isRequired
};
    function mapStateToProps(state, ownProps) {

        return {
            tweets: tweets,

        };
    }

    function mapDispatchToProps(dispatch) {
        return {
            actions: bindActionCreators(TweetActions, dispatch)
        };
    }

    export default connect(mapStateToProps, mapDispatchToProps)(CardLayout);


import React,{PropTypes} from 'react';
import Card from './Card';
import * as TweetActions from '../../actions/tweetActions';



export class CardLayout extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            tweets: Object.assign({}, props.tweets),
        };

        this.showTweetDetails = this.showTweetDetails.bind(this);
    }
    showTweetDetails(tweetId)
    {

    }
    render() {
        return (
            <div>
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


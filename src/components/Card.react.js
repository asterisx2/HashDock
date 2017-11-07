import React, {PropTypes} from 'react';

class TableHeader extends Component{
    showTweetDetails=()=>{
        this.props.showTweetDetails(this.props.tweet.tweetId);
    }
    render(){
        return (
            <div onClick={onClick}>
                <img src={tweet.avatar} className="tavatar"/>
                <span className="tuser">{tweet.user}</span>
                <a target="_blank" className="thandle" href="">@{tweet.handle}</a>
                <span className="tDateTime">{tweet.dateTime}</span>
                <p className="ttext">{tweet.text}</p>
            </div>
        );
    }
}
export default Card;

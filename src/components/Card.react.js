import React, {PropTypes} from 'react';

const Card =({tweet}) => {
    return (
        <div>
            <img src={tweet.avatar} className="tavatar"/>
            <span className="tuser">{tweet.user}</span>
            <a target="_blank" className="thandle" href="">@{tweet.handle}</a>
            <span className="tDateTime">{tweet.dateTime}</span>
            <p className="ttext">{tweet.text}</p>
        </div>
);
};

Card.propTypes = {
    tweet: PropTypes.object.isRequired
};

export default Card;

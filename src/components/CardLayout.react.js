import React,{PropTypes} from 'react';
import Card from './Card';

const CardLayout = ({tweets}) => {
    return (
        <div>
            {tweets.map(tweet =>
                <Card key={tweet.id} tweet ={tweet}/>
            )}
        </div>
    );
};

CardLayout.propTypes = {
    tweets: PropTypes.array.isRequired
};

export default CardLayout;

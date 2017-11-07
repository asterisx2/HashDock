import React from 'react';
import {Link} from 'react-router';
import Header from '../common/Header'
import CardLayout from './CardLayout'

class HomePage extends React.Component {
    render() {
        return (
            <div className="">
                <Header/>
                <CardLayout/>
            </div>
        );
    }
}

export default HomePage;
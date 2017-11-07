import React, {PropTypes} from 'react';
import HomePage from './home/HomePage';
import {connect} from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
               <HomePage></HomePage>
            </div>
        );
    }
}

export default App;

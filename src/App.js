import React, { Component } from 'react';

import './App.css';

import PostContainer from './containers/PostContainer/PostContainer';

class App extends Component {
    render() {
        return (
            <div className="App game-background">
				<PostContainer />
            </div>
        );
    }
}

export default App;

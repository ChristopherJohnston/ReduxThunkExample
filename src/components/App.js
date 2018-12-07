import React, { Component } from 'react';
import PostList from "./PostList";
import Icon from './Icon';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel, faStar } from '@fortawesome/free-solid-svg-icons';

library.add([faStroopwafel, faStar]);

class App extends Component {
    state = {  }
    render() {
        return (
            <div className="ui container">
                <div>
                    <Icon id="1" />
                    <Icon id="2" />
                </div>
                <PostList />
            </div>
        );
    }
}

export default App;

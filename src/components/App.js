import React, { Component } from 'react';
import PostList from "./PostList";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel, faStar } from '@fortawesome/free-solid-svg-icons';
import { faReact, faFacebook } from "@fortawesome/fontawesome-free-brands";
import IconList from './IconList';

library.add([faStroopwafel, faStar, faReact, faFacebook]);

class App extends Component {
    state = {  }

    render() {
        return (
            <div className="ui container">
                <IconList />
                <PostList />
            </div>
        );
    }
}

export default App;

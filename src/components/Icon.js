import React, { Component } from 'react';
import { connect } from "react-redux";
import { setFavourite } from "../actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Icon.css'

class Icon extends Component {

    toggleFavourite() {
        const newState = this.props.favourites[this.props.id] ? !this.props.favourites[this.props.id] : true;
        this.props.setFavourite(this.props.id, newState);
    }

    render() {
        const className = this.props.favourites[this.props.id] ? 'icon fave' : 'icon not-fave';
        return (
            <div className="container">
                <img src="img_avatar.png" alt="Avatar" className="image"/>
                <div className="overlay">
                    <span className={className}>
                        <FontAwesomeIcon onClick={() => this.toggleFavourite()} icon="star" />
                    </span>
                </div>
        </div>
    
        );
    }
}

const mapStateToProps = (state) => {
    return { favourites: state.favourites }
  };
  
export default connect(mapStateToProps, { setFavourite })(Icon);
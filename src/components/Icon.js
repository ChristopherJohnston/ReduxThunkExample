import React, { Component } from 'react';
import { connect } from "react-redux";
import { setFavourite } from "../actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Icon.css'

class Icon extends Component {
    render() {
        console.log(this.props)
        const { id, icon: { url, name, isFavourite, type, icon, style } } = this.props;
        var img = null;
        if (type === 'fontawesome') {
            img = <FontAwesomeIcon icon={icon} className="image" style={{...style, width: '100%', height: '100%'}}/>;
            console.log("fa")
        }
        else {
            img = <img src={url} alt={name} className="image"/>;
        }

        return (
            <div className="container" key={id}>
                {img}
                <div className="favourite-overlay">
                    <span className={isFavourite ? 'icon fave' : 'icon not-fave'}>
                        <FontAwesomeIcon onClick={() => this.props.setFavourite(id, !isFavourite)} icon="star" />
                    </span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {};
};
  
export default connect(mapStateToProps, { setFavourite })(Icon);
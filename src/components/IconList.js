import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchIcons } from "../actions";
import Icon from './Icon';

class IconList extends Component {
    componentDidMount() {
        this.props.fetchIcons()
    }

    render() {
        return (
            <div>{_.map(this.props.icons, (icon, id) =>  <Icon icon={icon} id={id} key={id} />)}</div>
        );
    }
}

const mapStateToProps = (state) => {
  return { icons: state.icons }
};

export default connect(mapStateToProps, { fetchIcons })(IconList);

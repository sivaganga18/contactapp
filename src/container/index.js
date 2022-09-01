import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../actions';

export default function Container(CurrentComponent) {
  class Container extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return <CurrentComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      contactReducer: state.contactReducer,
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(ActionCreators, dispatch),
    };
  }
  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

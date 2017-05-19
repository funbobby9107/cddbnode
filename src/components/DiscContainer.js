import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import DiscView from './DiscView';
import actions from './DiscActions'

const mapStateToProps = (state, ownProps) => {
  return {
    discState: state.discState
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addDisc: (newDisc) => {
      actions.create(dispatch, newDisc)
    },
    update: (disc) => {
      actions.update(dispatch, disc)
    },
    remove: (id) => {
      actions.remove(dispatch, id)
    }
  }
};


let DiscContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DiscView);

export default DiscContainer;


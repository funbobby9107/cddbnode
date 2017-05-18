import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import React from 'react';
import ReactDOM from 'react-dom';
import DiscView from './DiscView';


var DISC_TEMPLATE = {artist: "", title: "", errors: null};
var state = {};


function setState(changes) {
  Object.assign(state, changes);

  ReactDOM.render(
    React.createElement(DiscView, Object.assign({}, state, {
      onNewDiscChange: updateNewDisc,
      onNewDiscSubmit: submitNewDisc
    })),  
    document.getElementById('root')
  );
}  



setState({
  discs: [
    {key: 1, artist:'Van Halen', title:'Van Halen I'},
    {key: 2, artist:'Van Halen', title:'Van Halen II'}
  ],
  newDisc: Object.assign({}, DISC_TEMPLATE)
});


function updateNewDisc(disc) {
  setState({newDisc: disc});
}

function submitNewDisc()
{
  var disc = Object.assign({}, state.newDisc, {key: state.contacts.length + 1, errors: {} });

  if (!disc.title) {
    disc.errors.name = ["Please enter new disc's tite"];
  }

  if (!disc.artist) {
    disc.errors.artist = ["Please enter new disc's artist"];
  }

  setState(
    Object.keys(disc.errors).length === 0
    ? {
      newDisc: Object.assign({}, DISC_TEMPLATE),
      discs: state.discs.slice(0).concat(disc)
    }
    : { newDisc: disc}
  )

}
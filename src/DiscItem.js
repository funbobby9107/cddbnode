import React from 'react';

var DiscItem = React.createClass({
    propTypes: {
        artist: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
            React.createElement('div', {className: 'DiscItem'},
             React.createElement('div', {className: 'DiscItem-artist'}, this.props.artist),
             React.createElement('div', {className: 'DiscItem-title'}, this.props.title)
            )
        )    
    }  
});

export default DiscItem;
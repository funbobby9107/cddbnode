import React from 'react';
import DiscForm from './DiscForm';
import DiscItem from './DiscItem';

var DiscView = React.createClass( {
    propTypes: {
        discs: React.PropTypes.array.isRequired,
        newDisc: React.PropTypes.object.isRequired,
        onNewDiscChange: React.PropTypes.func.isRequired,
        onNewDiscSubmit: React.PropTypes.func.isRequired
    },

    render: function() {
        return (
            React.createElement('div', {className: 'DiscView'},
                React.createElement('h1', {className: 'DiscView-title'}, "Discs"),
                React.createElement('ul', {className: 'DiscView-list'},
                    this.props.discs.map(function(disc) {
                        return React.createElement(DiscItem, disc); 
                    })),
                React.createElement(DiscForm, {
                 value: this.props.newDisc,
                 onChange: this.props.onNewDiscChange,
                 onSubmit: this.props.onNewDiscSubmit
                })
            ) 
        )
    }
});

export default DiscView;
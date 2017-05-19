import React from 'react';

var DiscForm = React.createClass( {
    proptypes: {
        create: PropTypes.func.isRequired,
        update: PropTypes.func.isRequired,
        remove: PropTypes.func.isRequired,
        discState: PropTypes.object
    }
}


    onArtistInput: function(e) {
        this.props.onChange(Object.assign({}, this.props.value, {artist: e.target.value}))
    },

    onTitleInput: function(e) {
        this.props.onChange(Object.assign({}, this.props.value, {title: e.target.value}))
    },

    
    onSubmit: function(e) {
        e.preventDefault();
        this.props.onSubmit();
    },

    render: function() {
        var errors = this.props.value.errors || {};

        return(
            React.createElement('form', {className: 'DiscForm'},
            React.createElement('input', {
                type: 'text',
                placeholder: 'Artist',
                value: this.props.value.artist,
                onChange: function(e) {
                    console.log(e.target.value);
                }

            }),
            React.createElement('input', {
                type: 'text',
                placeholder: 'Title',
                value: this.props.value.title,
                onChange: function(e) {
                    console.log(e.target.value);
                }
            }),
            React.createElement('button', {type: 'submit'}, "Save")
            )
        )
    }
});

export default DiscForm;

import React from 'react';


DiscItem.prototype.Proptypes = {
    key: React.PropTypes.number.isRequired,
    disc: React.PropTypes.object.isRequired,
    update: React.PropTypes.func.isRequired,
    remove: React.PropTypes.func.isRequired
}

export default function DiscItem(props) {
    return (
        <div className="item">
            <a onClick={props.update}
                className="update-link">  {props.disc.artist} {props.disc.title} </a>
            <a onClick={props.remove}
                className="del-btn">Delete</a> 
        </div>        
    )
}
import React from 'react';
import DiscForm from './DiscForm';
import DiscItem from './DiscItem';

DiscView.prototype.Proptypes = {
    discState: React.PropTypes.object.isRequired,
    update: React.PropTypes.func.isRequired,
    addDisc: React.PropTypes.func.isRequired,
    remove: React.PropTypes.func.isRequired
}

export default function DiscView(props) {
    return (
        <div id="list">
            {props.discState.discs.map(function (disc, idx) {
                return (
                 <DiscItem
                     key={idx}
                     disc={disc}
                     update={props.update}
                     remove={props.remove} /> );
            
            })}
            <DiscForm addDisc = {props.addDisc} />
        </div>

    )
}    



   

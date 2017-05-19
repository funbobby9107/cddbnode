import React from 'react';

DiscForm.prototype.Proptypes = {
    addDisc: React.PropTypes.func.isRequired
    
}

export default function DiscForm(props) {
    let _artistInput;
    let _titleInput;
    function handleArtistInput(input) {
        _artistInput = input;
    }
    function handleTitleInput(input) {
        _titleInput = input;
     }


    function submit(event) {
        event.preventDefault();
        var content = {
            artist: _artistInput.value,
            title: _titleInput.value
        }
        props.addDisc(content);
        _artistInput = '';
        _titleInput = '';
    }

    return (
        <form onSubmit={submit}>
            <div className = "item-new">
                <input
                    ref={handleArtistInput}
                    type="text"
                    name="artist"
                    className="input" />
                    <input
                       ref={handleTitleInput}
                       type="text"
                       name="title"
                       className="input" />
            </div>    
        </form>    
    )
}
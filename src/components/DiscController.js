/**
 * Created by clboyd on 9/9/16.
 */

import uuid from 'uuid';

let discs = [{id: uuid(), artist: 'Van Halen', title: 'Van Halen I' }];

const actions = {
    create: function (input) {
        const newDisc = {
            id: uuid(),
            title: input.title,
            artist: input.artist
        };
        discs = discs.concat(newDisc);
        return discs;
    },

    findAll: function ( ) {
        return discs;
    },

    update: function (item) {
        let tt = discs.map(function (disc) {
            if (item.id === disc.id) {
                disc.title = item.title;
                disc.artist = item.artist;
            }
            return disc;
        });
        discs = tt;
        return discs;
    },

    delete: function (id ) {
        let tt = discs.filter(function (disc) {
            return (disc.id !== id);
        });
        discs = tt;
        return discs;
    }
};

export default actions

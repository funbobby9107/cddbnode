import constants from './DiscConstants'
import controller from './DiscController'

const emptyDisc = {
    id: '',
    artist: 'Empty artist',
    title: 'Empty title',
    trackCount: 0,
    length: '0:00',
    spars: 'AAD',
    label: '',
    quality: 0,
    rating: 0
}



const initialState = {
    discState: {
        discs: controller.findAll(),
        inputDisc: emptyDisc,
        dirty: false
    }   
}

export default function DiscReducer(state, action) {
	state = state || initialState;
	switch (action.type) {

		case constants.DISC_CREATE:
		case constants.DISC_FIND_ALL:
		case constants.DISC_UPDATE:
		case constants.DISC_DELETE:
			return {
				...state,
				discState:  action.discState
			};

		default:
			return state
	}
}

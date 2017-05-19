import constants from './DiscConstants'
import controller from './DiscController'

const initialState = {
    discState: {
        discs: controller.findAll(),
        dirty: false
    }   
}

export default function discReducer(state, action) {
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

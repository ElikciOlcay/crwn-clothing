const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    // Check to see if the reducer cares about this action
    switch (action.type) {
        case 'SET_CURRENT_USER':
            // If so, make a copy of `state`
            return {
                ...state,
                // and update the copy with the new value
                currentUser: action.payload
            }
        default:
            // otherwise return the existing state unchanged
            return state;
    }
}

export default userReducer;
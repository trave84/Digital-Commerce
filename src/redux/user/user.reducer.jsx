// Comp mounts for the first time
const INITIAL_STATE = {
    currentUser: null
}

// Function to trigger state changes by action
const userReducer = (state = INITIAL_STATE, action) =>  {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                // Just specific part of the state
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
};

export default  userReducer;
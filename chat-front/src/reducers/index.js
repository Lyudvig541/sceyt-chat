import { combineReducers } from "@reduxjs/toolkit";

// Initial state for user
const userInitialState = {
    user: {},
};


// User reducer
const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case 'USER_INFO':  // Match the action type correctly
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};

// Combine reducers
const rootReducer = combineReducers({
    user: userReducer,        // Manages state.user
});

export default rootReducer;

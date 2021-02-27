import { ActionTypes } from './actionTypes';


const isSignedIn = (authUser,state) => {

    return {...state, currentUser: authUser}
    
}

const userReducer = (state = {}, action) => {

    switch(action.type){
        case ActionTypes.SIGNED_IN:
            return isSignedIn(action.payload, state);
        default:
            return state;
    }

};

export default userReducer;
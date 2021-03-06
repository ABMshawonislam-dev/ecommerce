import {userActionType} from './usertypes'

const initialState = {
    currentUser: null
}

const userReducer = (state = initialState, action)=>{
    switch (action.type){
        case userActionType.set_current_user:
            return{
                ...state,
                currentUser: action.payload
            }

        default: return state;
    }
}

export default userReducer;
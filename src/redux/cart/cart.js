import { DropdownAction } from "./carttypes";

const initialState = {
    hidden: true
}

const cartReducer = (state = initialState,action) =>{
    switch(action.type){
        case DropdownAction.toggle_dropdown:
        return{
            ...state,
            hidden: !state.hidden
        }
        default:
            return state;
    }
}

export default cartReducer;
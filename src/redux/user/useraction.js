import {userActionType} from './usertypes'

export const setCurrentUser = user => ({
    type: userActionType.set_current_user,
    payload: user
})
import { userConstants } from '../Constrants/user.constants';

export function ticketlist(state = {}, action) {
    switch (action.type) {
        case userConstants.GETTICKETS_REQUEST:
            return {
                loading: true
            };
        case userConstants.GETTICKETS_SUCCESS:
            return {
                tickets: action.tickets
            };
        case userConstants.GETTICKETS_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}
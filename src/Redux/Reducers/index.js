import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
// import { registration } from './registration.reducer';
import { ticketlist } from './ticketlist.reducer';
// import { alert } from './alert.reducer';

const rootReducer = combineReducers({
    authentication,
    ticketlist
});

export default rootReducer;
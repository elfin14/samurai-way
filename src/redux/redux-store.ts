import {combineReducers, createStore} from 'redux';
import {DialogsReducer} from './dialogs-reducer';
import {ProfileReducer} from './profile-reducer';

const reducers = combineReducers(
    {
        profilePage:ProfileReducer,
        dialogsPage:DialogsReducer
    }
)

const store = createStore(reducers)

export default store
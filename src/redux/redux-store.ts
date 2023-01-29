import {combineReducers, createStore} from 'redux';
import {DialogsReducer} from './dialogs-reducer';
import {ProfileReducer} from './profile-reducer';
import {UsersReducer} from "./users-reducer";

const rootReducer = combineReducers(
    {
        profilePage:ProfileReducer,
        dialogsPage:DialogsReducer,
        usersPage:UsersReducer
    }
)
export type AppStateType = ReturnType <typeof rootReducer>
const store = createStore(rootReducer)

export default store
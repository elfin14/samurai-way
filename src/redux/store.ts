import {ProfileReducer} from './profile-reducer';
import {DialogsReducer} from './dialogs-reducer';
import { UsersType} from "./users-reducer";


type DialogsType = {
    id: number,
    name: string
}

type MessegesType = {
    id: number,
    message: string
}

export type PostsType = {
    id: number,
    message: string,
    likescount: number
}

export type ProfilePageType = {
    newPostText: string
    posts: Array<PostsType>
}

export type DialogsPageType = {
    newMessageText: string,
    messeges: Array<MessegesType>,
    dialogs: Array<DialogsType>
}

export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
}

export type AddNewPostType = {
    type: 'ADD-POST',
    newPostText: string
}

export type ChangeNewTextType = {
    type: 'CHANGE-NEW-TEXT',
    newText: string
}
export type AddMessageType = {
    type: 'CHANGE-NEW-MESSAGE',
    newMessage: string
}
export type AddNewMessageType = {
    type: 'ADD-NEW-MESSAGE',
    newMessageText: string
}
export type UserFollowType = {
    type: 'FOLLOW',
    userId: number
}
export type UserUnFollowType = {
    type: 'UNFOLLOW',
    userId: number
}
export type SetUsersType = {
    type: 'SET-USERS',
    users: Array<UsersType>
}
export type SetCurrentPageType = {
    type: 'SET-CURRENT-PAGE',
    currentPage: number
}
export type setTotalUsersCountType = {
    type: 'SET-TOTAL_USES_COUNT',
    totalCount: number
}
export type ActionTypes =
    AddNewPostType
    | ChangeNewTextType
    | AddMessageType
    | AddNewMessageType
    | UserFollowType
    | UserUnFollowType
    | SetUsersType
    | SetCurrentPageType
    | setTotalUsersCountType

export type StoreType = {
    _state: StateType,
    getState: () => StateType,
    _rerenderEntireTree: () => void
    subscriber: (observer: () => void) => void,
    dispatch: (action: ActionTypes) => void,

}

let store: StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {id: 1, message: 'Hi NIGGA!!!', likescount: 5},
                {id: 2, message: 'YooYoo', likescount: 6},
            ]
        },
        dialogsPage: {
            newMessageText: '',
            messeges: [
                {id: 1, message: 'Hi NIGGA!!!'},
                {id: 2, message: 'Yoo NIGGA!!!'},
                {id: 3, message: 'What about bottle of Rum'},
            ],
            dialogs: [
                {id: 1, name: 'Marsel'},
                {id: 2, name: 'Murdon'},
                {id: 3, name: 'Black Eye'},
                {id: 4, name: 'Mbopo'},
            ]
        }
    },
    getState() {
        return this._state;
    },
    _rerenderEntireTree() {
        console.log('Store change')
    },
    subscriber(observer) {
        this._rerenderEntireTree = observer
    },
    dispatch(action) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action)
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action)
        this._rerenderEntireTree()
    }
}
export default store



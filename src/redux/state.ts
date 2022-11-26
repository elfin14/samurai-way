export type DialogsType = {
    id: number,
    name: string
}

export type MessegesType = {
    id: number,
    message: string
}

export type PostsType = {
    id: number,
    message: string,
    likescount: number
}

type ProfilePageType = {
    newPostText: string
    posts: Array<PostsType>
}

type DialogsPageType = {
    messeges: Array<MessegesType>,
    dialogs: Array<DialogsType>
}

export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
}

type AddNewPostType = {
    type: 'ADD-POST',
    newPostText:string
}

type ChangeNewTextType = {
    type: 'CHANGE-NEW-TEXT',
    newText:string
}

export type ActionTypes = AddNewPostType | ChangeNewTextType
export type StoreType = {
    _state: StateType,
    getState: () => StateType,
    _rerenderEntireTree: () => void
    subscriber: (observer: () => void) => void,
    dispatch: (action: ActionTypes) => void,
}

export const addPostAC =(newPostText:string):AddNewPostType => ({type: 'ADD-POST', newPostText: newPostText})
export const changeNewTextAC =(newPost:string):ChangeNewTextType => ({type:'CHANGE-NEW-TEXT',newText:newPost})

const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {id: 1, message: 'Hi NIGGA!!!', likescount: 5},
                {id: 2, message: 'YooYoo', likescount: 6},
            ]
        },
        dialogsPage: {
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
        if (action.type === 'ADD-POST') {

            const NewPost = {
                id: 3,
                message: action.newPostText,
                likescount: 1
            }
            this._state.profilePage.posts.push(NewPost)
            this._state.profilePage.newPostText = ''
            this._rerenderEntireTree()
        } else if (action.type === 'CHANGE-NEW-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._rerenderEntireTree()
        }
    }
}
export default store



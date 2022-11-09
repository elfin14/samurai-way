import {rerenderEntireTree} from '../render';


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


let state = {
    profilePage: {
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
}
export default state

export const addNewPost = (newPostText: string) => {
    const NewPost = {
        id: 3,
        message: newPostText,
        likescount: 0
    }
    state.profilePage.posts.push(NewPost)
    rerenderEntireTree(state)
}

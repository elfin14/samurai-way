import {ActionTypes, AddNewPostType, ChangeNewTextType} from './store';


const initialState = {
        newPostText: '',
        posts: [
            {id: 1, message: 'Hi NIGGA!!!', likescount: 5},
            {id: 2, message: 'YooYoo', likescount: 6},
        ]
    }

export const ProfileReducer = (state = initialState, action:ActionTypes) => {
    switch (action.type){
        case 'ADD-POST':
            const NewPost = {
                id: 3,
                message: action.newPostText,
                likescount: 1
            }
            state.posts.push(NewPost)
            state.newPostText = ''
            return state
        case 'CHANGE-NEW-TEXT':
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}
export const addPostAC =(newPostText:string):AddNewPostType => ({type: 'ADD-POST', newPostText: newPostText})
export const changeNewTextAC =(newPost:string):ChangeNewTextType => ({type:'CHANGE-NEW-TEXT',newText:newPost})
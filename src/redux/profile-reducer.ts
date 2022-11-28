import {ActionTypes, AddNewPostType, ChangeNewTextType, ProfilePageType} from './state';

export const ProfileReducer = (state:ProfilePageType, action:ActionTypes) => {
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
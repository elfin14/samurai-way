import React from 'react';
import {addPostAC, changeNewTextAC} from '../../../redux/profile-reducer';
import Myposts from './Myposts';
import {connect} from "react-redux";
import {PostsType} from "../../../redux/store";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";

type mapStateToPropsType = {
    posts: Array<PostsType>,
    newPostText:string
}
type mapDispatchToProps = {
    onPostChange:(newPost: string)=>void,
    addPost: (newPostText: string) => void
}
export type MypostsPropsType = mapStateToPropsType & mapDispatchToProps
const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToProps => {
    return {
        onPostChange: (newPost: string) => {
            dispatch(changeNewTextAC(newPost))
        },
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }
    }

}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts)

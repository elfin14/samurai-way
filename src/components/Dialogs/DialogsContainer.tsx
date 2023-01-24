import React from 'react';
import {addMessageMessageAC, changeNewMessageAC, MessegesType} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {DialogsPageType} from "../../redux/store";
import {Dispatch} from "redux";

type MapStateToPropsType ={
    dialogs: DialogsPageType,
    messeges: Array<MessegesType>,
    newMessageText: string
}
type mapDispatchToPropsType ={
    addMessage:(newMessage:string)=>void,
    onMessageChange:(newMessage:string)=>void
}
export type DialogsPropsType = MapStateToPropsType & mapDispatchToPropsType
const mapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage,
        messeges: state.dialogsPage.messeges,
        newMessageText: state.dialogsPage.newMessageText
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessage:(newMessageText:string)=>{
            dispatch(addMessageMessageAC(newMessageText))
        },
        onMessageChange:(newMessage:string)=>{
            dispatch(changeNewMessageAC(newMessage))
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps )(Dialogs)


